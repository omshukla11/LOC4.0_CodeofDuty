from django.urls import path
from . import views

urlpatterns = [
    path('all-programs/', views.ProgramView.as_view(), name='All Programs'),
]