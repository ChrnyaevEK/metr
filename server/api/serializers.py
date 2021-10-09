from api import models
from rest_framework import serializers


class RoomSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    access_token = serializers.ReadOnlyField()

    class Meta:
        model = models.Room
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = models.Question
        fields = '__all__'


class NumericAnswerSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = models.NumericAnswer
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = models.NumericAnswer
        fields = '__all__'
