import csv
import datetime
import re
import unicodedata
import logging
from collections import defaultdict

import jwt
import tempfile

from api import models
from api import serializers
from api import texts
from api.consumers import PublicPoll

from server.settings import JWT_SECRET_KEY, JWT_ALGORITHM, FORCE_POPULAR_QUESTIONS

from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed, NotFound, PermissionDenied
from rest_framework.response import Response
from rest_framework.views import APIView

from sendfile import sendfile

logger = logging.getLogger('api.views')


def get_target_room(request):  # ...?room=hash...
    try:
        return models.Room.objects.get(pk=request.query_params['room'])
    except (models.Room.DoesNotExist, KeyError):
        raise NotFound('Target room does not exist')


class RoomViewSet(viewsets.ModelViewSet):
    model = models.Room
    queryset = model.objects.all()
    serializer_class = serializers.RoomSerializer
    permission_classes = []

    def retrieve(self, request, *args, **kwargs):
        # Update client room
        try:
            jwt_client = jwt.decode(request.COOKIES['client_token'], key=JWT_SECRET_KEY, algorithms=JWT_ALGORITHM)
        except (jwt.InvalidTokenError, KeyError):
            pass
        else:
            try:
                client = models.Client.objects.get(pk=jwt_client['id'])
            except models.Client.DoesNotExist:
                pass
            else:
                client.room = self.get_object()
                client.save()
        return super().retrieve(request, *args, **kwargs)

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('Destroy')

    def list(self, request, *args, **kwargs):
        raise MethodNotAllowed('List')


class QuestionViewSet(viewsets.ModelViewSet):
    model = models.Question
    serializer_class = serializers.QuestionSerializer
    permission_classes = []

    def get_queryset(self):
        room = get_target_room(self.request)
        return self.model.objects.filter(room=room)

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('Destroy')

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed('Update')


class NumericAnswerViewSet(viewsets.ModelViewSet):
    model = models.NumericAnswer
    serializer_class = serializers.NumericAnswerSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        question = models.Question.objects.get(pk=response.data['question'])
        PublicPoll.trigger_admin_update(question.room.id)
        return response

    def get_queryset(self):
        room = get_target_room(self.request)
        return self.model.objects.filter(question__room=room)

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('Destroy')

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed('Update')


class ClientViewSet(viewsets.ModelViewSet):
    model = models.Client
    serializer_class = serializers.ClientSerializer
    permission_classes = []
    queryset = model.objects.all()

    def create(self, request, *args, **kwargs):
        try:
            jwt_client = jwt.decode(request.COOKIES['client_token'], key=JWT_SECRET_KEY, algorithms=JWT_ALGORITHM)
        except (jwt.InvalidTokenError, KeyError):
            # Creating new client
            response = super().create(request, *args, **kwargs)
        else:
            # Using old client
            try:
                client = models.Client.objects.get(pk=jwt_client['id'])
            except models.Client.DoesNotExist:
                raise PermissionDenied("Interní chyba: client not found. Odstraňte cookie soubory a zkuste znovu.")
            if client.active:
                raise PermissionDenied(detail=texts.Error.client_conflict)
            response = Response(self.serializer_class(client).data)
        response.set_cookie('client_token',
                            jwt.encode({'id': response.data['id']}, key=JWT_SECRET_KEY, algorithm=JWT_ALGORITHM))
        return response

    def list(self, request, *args, **kwargs):
        raise MethodNotAllowed('List')

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('Destroy')

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed('Update')

    def retrieve(self, request, *args, **kwargs):
        raise MethodNotAllowed('Retrieve')


class ValidateRoomExist(APIView):
    """ Validate room exists """

    authentication_classes = []
    permission_classes = []

    @staticmethod
    def get(request, *args, **kwargs):
        try:
            get_target_room(request)
        except NotFound:
            return Response(False)
        return Response(True)


class CSVQuestionsExport(APIView):
    """ Questions & Answers export to CSV file"""

    authentication_classes = []
    permission_classes = []

    def get(self, request):

        room = get_target_room(request)
        questions_qs = models.Question.objects.filter(room=room)
        answers_qs = models.NumericAnswer.objects.filter(question__in=questions_qs)

        data = []
        csv_question_headers = ['question_id', 'question_value', 'answer_type', 'answer_value', 'answer_time_created']

        for question in questions_qs:
            for answer in answers_qs:
                if answer.question == question:
                    data.append(
                        {
                            "question_id": question.id,
                            "question_value": question.value,
                            "answer_type": answer.type,
                            "answer_value": answer.value,
                            "answer_time_created": answer.time_created
                        }
                    )

        with tempfile.NamedTemporaryFile(mode='w', delete=True, encoding="utf-8") as csvfile:
            dict_writer = csv.DictWriter(csvfile, csv_question_headers)
            dict_writer.writeheader()
            dict_writer.writerows(data)
            csvfile.flush()
            return sendfile(request, csvfile.name, encoding="utf-8", attachment=True,
                            attachment_filename="%s_room_export.csv" % room.id)


class PopularQuestions(APIView):
    """ Frequently used questions """

    authentication_classes = []
    permission_classes = []

    predefined_popular_questions = [
        serializers.PopularQuestionSerializer().validate({
            'value': 'Rychlost',
            'display_option': 'numeric_range_optimum'
        }),
        serializers.PopularQuestionSerializer().validate({
            'value': 'Kvalita látky',
            'display_option': 'numeric_range_maximum'
        }),
        serializers.PopularQuestionSerializer().validate({
            'value': 'Zájem o téma',
            'display_option': 'numeric_range_maximum'
        })
    ]

    serializer_class = serializers.PopularQuestionSerializer

    _nrm_str = re.compile(r'[^a-z0-9]+')
    POPULAR_QUESTIONS_LIMIT = 3

    def normalize_str(self, s):
        return self._nrm_str.sub('', unicodedata.normalize('NFD', s.lower()).encode('ascii', 'ignore').decode("utf-8"))

    def get(self, request):
        if FORCE_POPULAR_QUESTIONS:
            return Response(self.predefined_popular_questions)

        end = datetime.datetime.today()
        start = end - datetime.timedelta(days=30)

        frequency_map = defaultdict(list)
        for question in models.Question.objects.filter(time_created__range=[start, end]):
            frequency_map[self.normalize_str(question.value)].append(question)

        frequency_map = sorted(frequency_map.items(), key=lambda item: len(item[1]), reverse=True)
        popular_questions = [question[1][0] for question in frequency_map[:self.POPULAR_QUESTIONS_LIMIT]]
        serialized = [self.serializer_class(question).data for question in popular_questions]

        return Response(serialized)
