from django.urls import path
from . import views

urlpatterns = [
    path('all-recipes/', views.RecipeView.as_view(), name='All Recipe'),
]