from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.conf import settings
from .models import *
User = get_user_model()

class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = '__all__'

class ProgramPhaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgramPhase
        fields = '__all__'

class WorkoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workout
        fields = '__all__'

class WorkoutDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutDay
        fields = '__all__'

class WorkoutSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkoutSession
        fields = '__all__'

class UserProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProgram
        fields = '__all__'

