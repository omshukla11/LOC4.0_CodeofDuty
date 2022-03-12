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
    def list(self,request,ws_id,pk):
        user = User.objects.get(email=request.user)
        try:
            user_program = UserProgram.objects.get(user_id=user,program_id=pk)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        work_sess = WorkoutSession.objects.get(id = ws_id,user_prog_id=user_program)
        queryset = Exercise.objects.filter(workout_session=work_sess,user_prog_id=user_program)
        serializer = ExerciseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class ExerciseSetView(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self,request,pk,ex_id):
        user = User.objects.get(email=request.user)
        try:
            user_program = UserProgram.objects.get(user_id=user,program_id=pk)
            excer = Exercise.objects.get(id = ex_id,user_prog_id=user_program)
            queryset = ExerciseSet.objects.filter(exercise=excer,user_prog_id=user_program)
            serializer = ExerciseSetSerializer(queryset, many = True)
            return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        

class SetView(generics.ListAPIView): #direct userProgram id
    serializer_class = SetSerializer
    def list(self,request,pk):
        user = User.objects.get(email=request.user)
        try:
            user_program = UserProgram.objects.get(id=pk)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        queryset = Set.objects.filter(id=pk,user_prog_id=user_program)
        serializer = SetSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

class ExPerProgram(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self, request, pk):
        try:
            user_prog = UserProgram.objects.get(id = pk)
            tot_exer = Exercise.objects.filter(user_prog_id=user_prog)
            count =0
            for exer in tot_exer.iterator():
                if exer.completed:
                    count+=1
            return JsonResponse({"Total No of Exercises Done":count}, status=status.HTTP_200_OK)
        except:
            return JsonResponse({"error": "Wrong Cred"}, status=status.HTTP_401_UNAUTHORIZED)

class ExPerUser(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self, request, pk):
        try:
            user = User.objects.get(email = request.user)
            user_prog = UserProgram.objects.filter(user_id=user)
            tot_exer = Exercise.objects.filter(user_prog_id=user_prog)
            count =0
            for prog in user_prog.iterator():
                tot_exer = Exercise.objects.filter(user_prog_id=prog)
                for exer in tot_exer.iterator():
                    if exer.completed:
                        count+=1
            return JsonResponse({"Total No of Exercises Done":count}, status=status.HTTP_200_OK)
        except:
            return JsonResponse({"error": "Wrong Cred"}, status=status.HTTP_401_UNAUTHORIZED)

class ExeEachProgram(generics.ListAPIView):
    serializer_class = ExerciseSetSerializer
    def list(self, request, pk):
        try:
            user = User.objects.get(email = request.user)
            user_prog = UserProgram.objects.filter(user_id=user)
            tot_exer = Exercise.objects.filter(user_prog_id=user_prog)
            count =0
            data = {'true': [], 'false':[]}
            for prog in user_prog.iterator():
                tot_exer = Exercise.objects.filter(user_prog_id=prog)
                for exer in tot_exer.iterator():
                    if exer.completed:
                        data["true"].append(exer.name)
                    else:
                        data["false"].append(exer.name)
            return JsonResponse(data, status=status.HTTP_200_OK)
        except:
            return JsonResponse({"error": "Wrong Cred"}, status=status.HTTP_401_UNAUTHORIZED)

