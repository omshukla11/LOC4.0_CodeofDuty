from django.urls import path
from . import views

urlpatterns = [
    path('', views.lobby),
    path('room/', views.room),
    path('get_token/', views.getToken.as_view()),

    path('create_member/', views.createMember.as_view()),
    path('get_member/', views.getMember.as_view()),
    path('delete_member/', views.deleteMember.as_view()),
]