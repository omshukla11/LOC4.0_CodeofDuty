from django.urls import path
from . import views

urlpatterns = [
    path('all-programs/', views.ProgramView.as_view(), name='All Programs'),
    path('UserProgram/<int:pk>/', views.UserProgramView.as_view(), name='UserProgram'),
    path('ProgramPhase/<int:pk>/', views.ProgramPhaseView.as_view(), name='ProgramPhase'),
    path('Workout/<int:pk>/', views.WorkoutView.as_view(), name='Workout'),
    path('WorkoutDay/<int:pk>/', views.WorkoutDayView.as_view(), name='WorkoutDay'),
    path('WorkoutSession/<int:pk>/', views.WorkoutSessionView.as_view(), name='WorkoutSession'),
]