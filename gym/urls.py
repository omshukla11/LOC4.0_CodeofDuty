from django.urls import path
from . import views

urlpatterns = [
    path('Exercise/<int:ws_id>/', views.ExerciseView.as_view(), name='Exercise'),
    path('ExerciseSet/<int:ex_id>/', views.ExerciseSetView.as_view(), name='ExerciseSet'),
    path('Set/<int:pk>/', views.SetView.as_view(), name='Set'),
    path('ExPerProgram/<int:pk>/',views.ExPerProgram.as_view(),name='ExercisePerProg'),
    path('ExPerUser/<int:pk>/',views.ExPerUser.as_view(),name='ExercisePerUser'),
]
