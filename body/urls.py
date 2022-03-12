from django.urls import path
from . import views

urlpatterns = [
    path('MuscleGroup/', views.MuscleGroupView.as_view(), name='MuscleGroup'),
    path('Muscle/', views.MuscleGroupView.as_view(), name='Muscle'),
]