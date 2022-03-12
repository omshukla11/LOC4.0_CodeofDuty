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
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)

#User selects a program
class UserProgramView(APIView):
    serializer_class = UserProgramSerializer
    permission_classes = [IsAuthenticated] 

    def get(self,request,pk):
        user = User.objects.get(email = request.user)
        prog = Program.objects.get(id = pk)
        try:
            print(user)
            userprog = UserProgram.objects.get(user_id=user,program_id=prog)
            content = UserProgramSerializer(userprog,many=False)
            return JsonResponse(content.data, status = status.HTTP_200_OK)
        except UserProgram.DoesNotExist:
            content = {"This user doesn't belong to this program"}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        

    def post(self,request,pk):
        user = User.objects.get(email = request.user)
        prog = Program.objects.get(id = pk)
        try:
            print(user)
            userprog = UserProgram.objects.get(user_id=user,program_id=prog)
            content = UserProgramSerializer(userprog)
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        except:
            product_user = UserProgram(user_id=user,program_id=prog)
            serializer = UserProgramSerializer(product_user,data=request.data)
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


class ProgramPhaseView(generics.ListAPIView): #pass the user_prog_id
    serializer_class = ProgramPhaseSerializer
    queryset = ProgramPhase.objects.all()
    def list(self,request,pk):
        user = User.objects.get(email = request.user)
        try:
            user_program = UserProgram.objects.get(id=pk)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        # try:
        #     course = Program.objects.get(id = pk,user_prog_id=user_program)
        # except:
        #     content = {'detail': 'No such program'}
        #     return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        print("Hi")
        queryset = ProgramPhase.objects.filter(user_prog_id=user_program)
        serializer = ProgramPhaseSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)


class WorkoutView(generics.ListAPIView): #pass the user_prog_id
    serializer_class = WorkoutSerializer
    queryset = Workout.objects.all()
    def list(self,request,pk):
        print(request.user)
        user = User.objects.get(email = request.user)
        try:
            user_program = UserProgram.objects.get(id=pk)
            queryset=Workout.objects.filter(user_prog_id=user_program)
            print(queryset, "heloo")
            serializer = WorkoutSerializer(queryset, many = True)
            print(serializer.data)
            return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        # try:
        #     course = ProgramPhase.objects.get(id = pk,user_prog_id=user_program)
        # except:
        #     content = {'detail': 'No such programPhase'}
        #     return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        


class WorkoutDayView(generics.ListAPIView): #the id u get from workoutView of workoutDay pass that here
    serializer_class = WorkoutDaySerializer
    queryset = WorkoutDay.objects.all()
    def list(self,request,pk_prog,pk):
        user = User.objects.get(email = request.user)
        try:
            user_program = UserProgram.objects.get(user_id=user,program_id=pk_prog)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        try:
            WorkoutDay.objects.get(id=pk,user_prog_id=user_program)
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
    def list(self,request,pk_prog,pk):
        user = User.objects.get(email = request.user)
        try:
            user_program = UserProgram.objects.get(user_id=user,program_id=pk_prog)
        except UserProgram.DoesNotExist:
            content = {'detail': 'No such Program selected by user'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)

        try:
            WorkoutSession.objects.get(id=pk,user_prog_id=user_program)
        except WorkoutDay.DoesNotExist:
            content = {'detail': 'No such WorkoutSession exists'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        queryset=WorkoutSession.objects.filter(id=pk)
        serializer = WorkoutSessionSerializer(queryset, many = True)
        print(serializer.data[0])
        return JsonResponse(serializer.data,safe = False, status = status.HTTP_200_OK)
        
