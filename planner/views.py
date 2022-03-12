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
    serializer_class = UserProgramSerializer
    permission_classes = [IsAuthenticated] 
    def post(self,request,pk):
        user = User.objects.get(email = request.user)
        try:
            UserProgram.objects.get(user_id=user.id,program_id=pk)
        except UserProgram.DoesNotExist:
            content = {'detail': 'User already selected this Program'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        product_user = UserProgram(user_id=user.id,program_id=pk)
        serializer = UserProgramSerializer(product_user,data=request.data)
        print(serializer.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status = status.HTTP_202_ACCEPTED)
        return JsonResponse(serializer.errors, status = status.HTTP_400_BAD_REQUEST)




class ProgramPhaseView(generics.ListAPIView):
    serializer_class = ProgramPhaseSerializer
    def list(self,request):
        queryset = ProgramPhase.objects.all()
        serializer = ProgramPhaseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutView(generics.ListAPIView):
    serializer_class = WorkoutSerializer
    def list(self,request):
        queryset = Workout.objects.all()
        serializer = WorkoutSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutDayView(generics.ListAPIView):
    serializer_class = WorkoutDaySerializer
    def list(self,request):
        queryset = WorkoutDay.objects.all()
        serializer = WorkoutDaySerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutSessionView(generics.ListAPIView):
    serializer_class = WorkoutSessionSerializer
    def list(self,request):
        queryset = WorkoutSession.objects.all()
        serializer = WorkoutSessionSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
