from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.conf import settings
from .models import *
User = get_user_model()


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields ="__all__"