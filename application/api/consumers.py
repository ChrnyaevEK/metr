from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from api import models
from api.utils import Counter
import json
import datetime


class PublicPoll(WebsocketConsumer):
    room = None
    client_id = None
    public_group_name = None
    admin_group_name = None

    def connect(self):
        self.room = self.scope['url_route']['kwargs']['room']
        self.public_group_name = f'public_{self.room}'
        self.admin_group_name = f'admin_{self.room}'

        if models.Room.objects.filter(pk=self.room).exists():
            async_to_sync(self.channel_layer.group_add)(self.public_group_name, self.channel_name)

            self.accept()

    def receive(self, text_data=None, bytes_data=None):
        event = json.loads(text_data)
        if event['type'] == 'bind_client':
            self.bind_client(event['message']['id'])

            # Trigger all admin channels - user connected
            async_to_sync(self.channel_layer.group_send)(
                self.admin_group_name,
                {
                    'type': 'public_connect',
                }
            )

    # Match WS with client
    def bind_client(self, client_id):
        if models.Client.objects.filter(pk=client_id).exists():
            self.client_id = client_id

    @staticmethod
    def trigger_admin_update(room):
        # Trigger admin ws to fetch data
        layer = get_channel_layer()
        async_to_sync(layer.group_send)(f'admin_{room}', {
            'type': 'state_change',
        })

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(self.public_group_name, self.channel_name)
        try:
            client = models.Client.objects.get(pk=self.client_id)
            client.time_destroyed = datetime.datetime.now()
            client.save()
        except models.Client.DoesNotExist:
            pass

        # Trigger all admin channels - user disconnected
        async_to_sync(self.channel_layer.group_send)(
            self.admin_group_name,
            {
                'type': 'public_disconnect',
            }
        )

    def admin_connect(self, event):
        self.send(json.dumps(event))

    def admin_disconnect(self, event):
        self.send(json.dumps(event))


class AdminPoll(WebsocketConsumer):
    room = None
    public_group_name = None
    admin_group_name = None

    def connect(self):
        self.room = self.scope['url_route']['kwargs']['room']  # TODO - validate room exist
        self.public_group_name = f'public_{self.room}'
        self.admin_group_name = f'admin_{self.room}'

        if models.Room.objects.filter(pk=self.room).exists():
            async_to_sync(self.channel_layer.group_add)(self.admin_group_name, self.channel_name)

            self.accept()
            try:
                Counter.admin_counter[self.room] += 1
            except KeyError:
                Counter.admin_counter[self.room] = 1

            # Trigger all public channels - admin connected
            async_to_sync(self.channel_layer.group_send)(
                self.public_group_name,
                {
                    'type': 'admin_connect',
                }
            )

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(self.admin_group_name, self.channel_name)
        try:
            Counter.admin_counter[self.room] -= 1
        except KeyError:
            pass
        else:
            if Counter.admin_counter[self.room] <= 0:
                del Counter.admin_counter[self.room]
                async_to_sync(self.channel_layer.group_send)(
                    self.public_group_name,
                    {
                        'type': 'admin_disconnect',
                    }
                )

    def public_connect(self, event):
        self.send(json.dumps(event))

    def state_change(self, event):
        self.send(json.dumps(event))

    def public_disconnect(self, event):
        self.send(json.dumps(event))
