from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.conf import settings
from .models import *
User = get_user_model()

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = '__all__'

class ExerciseSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExerciseSet
        fields = '__all__'

class SetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Set
        fields = '__all__'




