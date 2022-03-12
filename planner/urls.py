from django.urls import path
from . import views

urlpatterns = [
    path('all-programs/', views.ProgramView.as_view(), name='All Programs'),
    path('UserProgram/<int:pk>/', views.UserProgramView.as_view(), name='UserProgram'),
    path('ProgramPhase/', views.ProgramPhaseView.as_view(), name='ProgramPhase'),
    path('Workout/', views.WorkoutView.as_view(), name='Workout'),
    path('WorkoutSession/', views.WorkoutSessionView.as_view(), name='WorkoutSession'),


]