from django.urls import path
from . import views

urlpatterns = [
    path('Exercise/', views.ExerciseView.as_view(), name='Exercise'),
    path('Exercise/', views.ExerciseSetView.as_view(), name='ExerciseSet'),
    path('Set/', views.SetView.as_view(), name='Set'),
]
