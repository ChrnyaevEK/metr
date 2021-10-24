from django.db import models
from hashid_field import HashidAutoField


def display_option_validator(item):
    return item in DISPLAY_OPTIONS


class Room(models.Model):
    id = HashidAutoField(primary_key=True, salt='room.id')
    time_created = models.DateTimeField(auto_now_add=True)
    time_updated = models.DateTimeField(auto_now=True)
    use_color = models.BooleanField(default=True)

    def online_counter(self):
        return Client.objects.filter(room=self).count()


class Question(models.Model):
    id = HashidAutoField(primary_key=True, salt='question.id')
    time_created = models.DateTimeField(auto_now_add=True)
    room = models.ForeignKey(Room, models.CASCADE)
    # Name of widget to use when data is displayed
    display_option = models.CharField(max_length=100, validators=[display_option_validator])
    value = models.CharField(max_length=1000)

    @property
    def rate(self):
        # TODO Implement
        return 10


class Client(models.Model):
    id = HashidAutoField(primary_key=True, salt='client.id')
    room = models.ForeignKey(Room, on_delete=models.CASCADE)


class Answer(models.Model):
    id = HashidAutoField(primary_key=True, salt='answer.id')
    time_created = models.DateTimeField(auto_now_add=True)
    client = models.ForeignKey(Client, on_delete=models.DO_NOTHING)
    question = models.ForeignKey(Question, models.CASCADE)

    class Meta:
        abstract = True


class NumericAnswer(Answer):
    type = 'numeric_answer'
    value = models.FloatField(default=0)


# Option name: valid answer type
DISPLAY_OPTIONS = {
    'numeric_range_maximum': NumericAnswer.type,
    'numeric_range_optimum': NumericAnswer.type,
}
