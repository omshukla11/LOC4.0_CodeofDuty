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


class MuscleGroupView(generics.ListAPIView):
    serializer_class = MuscleGroupSerializer
    def list(self,request,mg_id):
        queryset = MuscleGroup.objects.filter(id=mg_id)
        serializer = MuscleGroupSerializer(queryset, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class MuscleView(generics.ListAPIView):
    serializer_class = MuscleSerializer
    def list(self,request,ms_id):
        queryset = Muscle.objects.filter(id=ms_id)
        serializer = MuscleSerializer(queryset, many = True)
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
