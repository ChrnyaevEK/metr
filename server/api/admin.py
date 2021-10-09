from django.contrib import admin
from api import models

admin.site.register(models.NumericAnswer)
admin.site.register(models.Question)
admin.site.register(models.Room)
admin.site.register(models.Client)
