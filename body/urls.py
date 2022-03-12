from django.urls import path
from . import views

urlpatterns = [
    path('MuscleGroup/<int:mg_id>', views.MuscleGroupView.as_view(), name='MuscleGroup'),
    path('Muscle/<int:ms_id>', views.MuscleView.as_view(), name='Muscle'),
]