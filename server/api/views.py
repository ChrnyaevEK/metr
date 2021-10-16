from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied, MethodNotAllowed, NotFound
from api import serializers
from api import models


def validate_access_token(request, room):  # ...?access_token=hash...
    permission_denied = PermissionDenied('Access token validation failed')
    try:
        access_token = request.query_params['access_token']
    except KeyError:
        raise permission_denied
    else:
        if room.access_token != access_token:
            raise permission_denied


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

    def update(self, request, *args, **kwargs):
        room = self.get_object()
        validate_access_token(request, room)
        return super().update(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        room = self.get_object()
        validate_access_token(request, room)
        return super().create(request, *args, **kwargs)

    def retrieve(self, request, *args, **kwargs):
        room = self.get_object()
        validate_access_token(request, room)
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
        # room = get_target_room(self.request)
        # validate_access_token(self.request, room)
        # return self.model.objects.filter(room=room)
        return self.model.objects.all()

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('Destroy')

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed('Update')


class NumericAnswerViewSet(viewsets.ModelViewSet):
    model = models.NumericAnswer
    serializer_class = serializers.NumericAnswerSerializer
    permission_classes = []

    def get_queryset(self):
        room = get_target_room(self.request)
        validate_access_token(self.request, room)
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


class ValidateAccessToken(APIView):
    """ Validate access token against room hash """

    authentication_classes = []
    permission_classes = []

    @staticmethod
    def get(request, *args, **kwargs):
        try:
            room = get_target_room(request)
            validate_access_token(request, room)
        except (PermissionDenied, NotFound):
            return Response(False)
        return Response(True)


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
