from django.urls import path
from .views import *

urlpatterns = [
    path('Exercise/<int:pk>/<int:ws_id>/', ExerciseView.as_view(), name='Exercise'),
    path('ExerciseSet/<int:pk>/<int:ex_id>/', ExerciseSetView.as_view(), name='ExerciseSet'),
    path('Set/<int:pk>/', SetView.as_view(), name='Set'),
    path('ExPerProgram/<int:pk>/',ExPerProgram.as_view(),name='ExercisePerProg'),
    path('ExPerUser/<int:pk>/',ExPerUser.as_view(),name='ExercisePerUser'),
    path('ExeEachProgram/<int:pk>/',ExeEachProgram.as_view(),name='ExercisePerUser'),
]
