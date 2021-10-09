from rest_framework import viewsets
from rest_framework.exceptions import PermissionDenied, MethodNotAllowed, NotFound
from api import serializers
from api import models


def validate_access_token(request, room):  # ...?access_token=hash...
    permission_denied = PermissionDenied({
        'message': 'Access token validation failed',
    })
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
        raise NotFound({
            'message': 'Target room does not exist'
        })


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
        room = self.get_object()
        validate_access_token(request, room)
        return super().destroy(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        raise MethodNotAllowed('List')


class QuestionViewSet(viewsets.ModelViewSet):
    model = models.Question
    serializer_class = serializers.QuestionSerializer
    permission_classes = []

    def get_queryset(self):
        room = get_target_room(self.request)
        validate_access_token(self.request, room)
        return self.model.objects.filter(room=room)

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

    def retrieve(self, request, *args, **kwargs):
        raise MethodNotAllowed('Retrieve')
