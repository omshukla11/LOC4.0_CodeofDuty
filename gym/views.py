from django.shortcuts import render
from .models import *
from .serializers import *
# Create your views here.
from django.conf import settings
from django.shortcuts import render
from rest_framework import (mixins, generics, status, permissions)
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.http.response import Http404, HttpResponse, JsonResponse
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view


class ExerciseView(generics.ListAPIView):
    serializer_class = ExerciseSerializer
    def list(self,request):
        queryset = Exercise.objects.all()
        serializer = ExerciseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class ExerciseSetView(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self,request):
        queryset = ExerciseSet.objects.all()
        serializer = ExerciseSetSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class SetView(generics.ListAPIView):
    serializer_class = SetSerializer
    def list(self,request):
        queryset = Set.objects.all()
        serializer = SetSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
