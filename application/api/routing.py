from django.urls import re_path

from api import consumers

websocket_urlpatterns = [
    re_path(r'ws/public_poll/(?P<room>\w+)/$', consumers.PublicPoll.as_asgi()),
    re_path(r'ws/admin_poll/(?P<room>\w+)/$', consumers.AdminPoll.as_asgi()),
]
