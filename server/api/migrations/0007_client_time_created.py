# Generated by Django 3.2.8 on 2021-10-23 19:25

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_alter_question_value'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='time_created',
            field=models.DateTimeField(default=datetime.datetime(2021, 10, 23, 19, 25, 43, 594292)),
        ),
    ]
