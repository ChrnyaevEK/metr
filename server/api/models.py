from django.db import models
from hashid_field import HashidAutoField, HashidField


class Room(models.Model):
    id = HashidAutoField(primary_key=True)
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    access_token = HashidField(unique=True, )  # Access token will allow to display answers
    use_color = models.BooleanField(default=True)

    def online_counter(self):
        return Client.objects.filter(room=self).count()


class Question(models.Model):
    id = HashidAutoField(primary_key=True)
    time_created = models.DateTimeField(auto_now_add=True)
    room = models.ForeignKey(Room, models.CASCADE)
    display_option = models.CharField(max_length=20)  # Name of widget to use when data is displayed


class Client(models.Model):
    id = HashidAutoField(primary_key=True)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)


class Answer(models.Model):
    id = HashidAutoField(primary_key=True)
    time_created = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    question = models.ForeignKey(Question, models.CASCADE)

    class Meta:
        abstract = True


class NumericAnswer(Answer):
    type = 'numeric_answer'
    value = models.FloatField()
