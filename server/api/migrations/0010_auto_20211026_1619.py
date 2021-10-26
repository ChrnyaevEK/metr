# Generated by Django 3.2.8 on 2021-10-26 16:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_remove_client_time_created'),
    ]

    operations = [
        migrations.AddField(
            model_name='client',
            name='time_created',
            field=models.DateTimeField(default=datetime.datetime(2021, 10, 26, 16, 19, 59, 856472)),
        ),
        migrations.AddField(
            model_name='client',
            name='time_destroyed',
            field=models.DateTimeField(default=None, null=True),
        ),
    ]
