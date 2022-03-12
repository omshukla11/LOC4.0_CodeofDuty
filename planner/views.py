from typing import Type
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


# class OneCourse(generics.ListAPIView):
#     serializer_class = ReviewSerializer
#     queryset = Course.objects.all()
#     def list(self,request,pk):
#         try:
#             course = Course.objects.get(id = pk)
#         except:
#             content = {'detail': 'No such course'}
#             return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
#         queryset = course
#         serializer = CourseSerializer(queryset, many = False)
#         return JsonResponse(serializer.data, status = status.HTTP_200_OK)


class ProgramPhaseView(generics.ListAPIView):
    serializer_class = ProgramPhaseSerializer
    queryset = ProgramPhase.objects.all()
    def list(self,request,pk):
        try:
            course = Program.objects.get(id = pk)
        except:
            content = {'detail': 'No such program'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        print("Hi")
        queryset = ProgramPhase.objects.filter(id=course.id)
        serializer = ProgramPhaseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutView(generics.ListAPIView): #pass program ka id
    serializer_class = WorkoutSerializer
    queryset = Workout.objects.all()
    def list(self,request,pk):
        try:
            course = ProgramPhase.objects.get(id = pk)
        except:
            content = {'detail': 'No such programPhase'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        queryset=Workout.objects.filter(id=course.workout.id)
        serializer = WorkoutSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutDayView(generics.ListAPIView): #the id u get from workoutView of workoutDay pass that here
    serializer_class = WorkoutDaySerializer
    queryset = WorkoutDay.objects.all()
    def list(self,request,pk):
        try:
            WorkoutDay.objects.get(id=pk)
        except WorkoutDay.DoesNotExist:
            content = {'detail': 'No such Workoutday exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        queryset = WorkoutDay.objects.filter(id=pk)
        serializer = WorkoutDaySerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutSessionView(generics.ListAPIView):#the id u get from workoutDayView of workoutSession pass that here
    serializer_class = WorkoutSessionSerializer
    queryset = WorkoutSession.objects.all()
    def list(self,request,pk):
        try:
            WorkoutSession.objects.get(id=pk)
        except WorkoutDay.DoesNotExist:
            content = {'detail': 'No such WorkoutSession exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        queryset=WorkoutSession.objects.filter(id=pk)
        serializer = WorkoutSessionSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
