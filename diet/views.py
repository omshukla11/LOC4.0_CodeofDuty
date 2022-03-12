from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.

