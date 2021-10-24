from api import models
from rest_framework import serializers
from hashid_field.rest import HashidSerializerCharField


class RoomSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(read_only=True, source_field='api.Room.id')
    online_counter = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.Room
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(read_only=True, source_field='api.Question.id')
    room = serializers.PrimaryKeyRelatedField(
        pk_field=HashidSerializerCharField(source_field='api.Room.id'),
        queryset=models.Room.objects.all()
    )
    rate = serializers.IntegerField(read_only=True)

    class Meta:
        model = models.Question
        fields = '__all__'


class NumericAnswerSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(read_only=True, source_field='api.NumericAnswer.id')
    question = serializers.PrimaryKeyRelatedField(
        pk_field=HashidSerializerCharField(source_field='api.Question.id'),
        queryset=models.Question.objects.all()
    )
    client = serializers.PrimaryKeyRelatedField(
        pk_field=HashidSerializerCharField(source_field='api.Client.id'),
        queryset=models.Client.objects.all()
    )
    type = serializers.ReadOnlyField(default=models.NumericAnswer.type)

    class Meta:
        model = models.NumericAnswer
        fields = '__all__'


class ClientSerializer(serializers.ModelSerializer):
    id = HashidSerializerCharField(read_only=True, source_field='api.Client.id')
    room = serializers.PrimaryKeyRelatedField(
        pk_field=HashidSerializerCharField(source_field='api.Room.id'),
        queryset=models.Room.objects.all()
    )

    class Meta:
        model = models.Client
        fields = '__all__'
