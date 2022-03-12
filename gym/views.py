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
from planner.models import *


class ExerciseView(generics.ListAPIView):
    serializer_class = ExerciseSerializer
    def list(self,request,ws_id):
        work_sess = WorkoutSession.objects.get(id = ws_id)
        queryset = Exercise.objects.filter(workout_session=work_sess)
        serializer = ExerciseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class ExerciseSetView(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self,request,ex_id):
        excer = Exercise.objects.get(id = ex_id)
        queryset = ExerciseSet.objects.filter(exercise=excer)
        serializer = ExerciseSetSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class SetView(generics.ListAPIView):
    serializer_class = SetSerializer
    def list(self,request,pk):
        queryset = Set.objects.filter(id=pk)
        serializer = SetSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class ExPerProgram(generics.ListAPIView):
    pass
    # serializer_class = ExerciseSerializer
    # def list(self,request,pk):
    #     user = User.objects.get(email = request.user)
    #     print(pk)
    #     program = Program.objects.get(id = pk)
    #     try:
    #         up = UserProgram.objects.get(user_id=user, program_id=program)
    #         pp = ProgramPhase.objects.get(program_id = up.program_id)
    #         print(pp)
    #         ws = WorkoutSession.objects.get(id = pp.workout.workout_day.session.id)
    #         exer = Exercise.objects.filter(workout_seesion=ws)
    #         serializer = ExerciseSerializer(exer, many=True)
    #         return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
    #     except:
    #         return JsonResponse({"error":"User Corresponding to Program Phase not found"}, status = status.HTTP_400_BAD_REQUEST)

class ExPerUser(generics.ListAPIView):
    pass
