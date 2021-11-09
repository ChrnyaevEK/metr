import csv
import tempfile

from api import models
from api import serializers
from api.consumers import PublicPoll
from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed, NotFound
from rest_framework.response import Response
from rest_framework.views import APIView
from sendfile import sendfile

CSV_QUESTION_HEADERS = ['question_id', 'question_value', 'answer_type', 'answer_value', 'answer_time_created']


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
            dict_writer = csv.DictWriter(csvfile, CSV_QUESTION_HEADERS)
            dict_writer.writeheader()
            dict_writer.writerows(data)
            csvfile.flush()
            return sendfile(request, csvfile.name, encoding="utf-8", attachment=True,
                            attachment_filename="%s_room_export.csv" % room.id)
