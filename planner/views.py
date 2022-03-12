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


class ProgramView(generics.ListAPIView):
    serializer_class = ProgramSerializer
    def list(self,request):
        queryset = Program.objects.all()
        serializer = ProgramSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

#User selects a program
class UserProgramView(APIView):

    def post(self,request,pk):
        pass