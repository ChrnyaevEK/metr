from django.apps import AppConfig


class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        from api.models import Client

        for client in Client.objects.filter(active=True).all():
            client.active = False
            client.save()
