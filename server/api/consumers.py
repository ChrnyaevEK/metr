from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync


class PublicPoll(WebsocketConsumer):
    def connect(self):
        self.room = self.scope['url_route']['kwargs']['room']  # TODO - validate room exist
        self.public_group_name = f'public_{self.room}'
        self.admin_group_name = f'admin_{self.room}'

        async_to_sync(self.channel_layer.group_add)(self.public_group_name, self.channel_name)

        self.accept()

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(self.public_group_name, self.channel_name)


class AdminPoll(WebsocketConsumer):
    def connect(self):
        self.room = self.scope['url_route']['kwargs']['room']  # TODO - validate room exist
        self.public_group_name = f'public_{self.room}'
        self.admin_group_name = f'admin_{self.room}'

        async_to_sync(self.channel_layer.group_add)(self.admin_group_name, self.channel_name)

        self.accept()

    def disconnect(self, code):
        async_to_sync(self.channel_layer.group_discard)(self.admin_group_name, self.channel_name)
