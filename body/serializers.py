from models import *
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.urls import reverse
from django.conf import settings
from .models import *
User = get_user_model()

class MuscleGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = MuscleGroup
        fields='__all__'


class MuscleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Muscle
        fields='__all__'