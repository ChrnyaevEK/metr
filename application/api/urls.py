from api import views
from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'rooms', views.RoomViewSet, 'room')
router.register(r'questions', views.QuestionViewSet, 'question')
router.register(r'numeric_answers', views.NumericAnswerViewSet, 'numeric_answer')
router.register(r'clients', views.ClientViewSet, 'client')

urlpatterns = [
    path('', include(router.urls)),
    path('validate_room_exist', views.ValidateRoomExist.as_view()),
    path('popular_questions/', views.PopularQuestions.as_view()),
]
