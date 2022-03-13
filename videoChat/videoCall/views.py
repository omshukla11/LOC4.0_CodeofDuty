from django.http import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from agora_token_builder import RtcTokenBuilder
import random 
import time
from rest_framework.views import APIView
from rest_framework import (mixins, generics, status, permissions)
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from django.views.decorators.csrf import csrf_exempt
from videoCall.serializers import RoomUsernameSerializer
from .models import RoomUsername
# Create your views here.

def lobby(request):
    return render(request, 'videoCall/lobby.html')


def room(request):
    return render(request, 'videoCall/room.html')

class getToken(APIView):
    channel_param_config = openapi.Parameter('channel',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter channel here")

    @swagger_auto_schema(manual_parameters=[channel_param_config])
    def get(self,request, *args, **kwargs):
        appId = '943240068a7a4570ba10d8b478fb2b7d'
        appCertificate = '0e71c4db62484d858929c461c45da8f2'

        channelName = request.GET.get('channel')
        uid = random.randint(1,230)
        expirationTimeInSeconds = 3600 * 24
        currentTimeStamp = time.time()
        privilegeExpiredTs = currentTimeStamp + expirationTimeInSeconds
        role = 1

        token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs)
        return JsonResponse({'token':token,'uid':uid})


class createMember(generics.GenericAPIView):

    serializer_class = RoomUsernameSerializer 
    # @csrf_exempt
    def get(self, request, *args, **kwargs):
        name= request.GET.get('name')
        uid = request.GET.get('uid')
        room_name = request.GET.get('room_name')
        roomUsername= RoomUsername.objects.get_or_create(name=name,uid=uid,room_name=room_name)
        
        # serializer = RoomUsernameSerializer(roomUsername,data=request.data)
        # print(serializer)
        # if serializer.is_valid():
        #     usernameReturn = serializer.save()
        #     return JsonResponse(serializer.data, safe = False,status = status.HTTP_202_ACCEPTED)
        # return JsonResponse(serializer.errors,safe = False, status = status.HTTP_400_BAD_REQUEST)
        return JsonResponse(name, safe=False)


class getMember(APIView):
    uid_param_config = openapi.Parameter('uid',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter uid here")
    room_name_param_config = openapi.Parameter('room_name',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter room name here")

    @swagger_auto_schema(manual_parameters=[uid_param_config,room_name_param_config])
    def get(self,request, *args, **kwargs):
        uid = request.GET.get('uid')
        room_name = request.GET.get('room_name')
        print(uid,room_name)
        try:
            member = RoomUsername.objects.get(uid=uid,room_name=room_name)
            print(member)
        except RoomUsername.DoesNotExist:
            content = {'detail': 'No such member'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        name = member.name
        return JsonResponse(name, safe=False)
    

class deleteMember(APIView):

    uid_param_config = openapi.Parameter('uid',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter uid here")
    room_name_param_config = openapi.Parameter('room_name',in_=openapi.IN_QUERY, type=openapi.TYPE_STRING, description="Enter room name here")

    @swagger_auto_schema(manual_parameters=[uid_param_config,room_name_param_config])
    def get(self,request, *args, **kwargs):
        uid = request.GET.get('uid')
        room_name = request.GET.get('room_name')
        print(uid,room_name)
        try:
            print("Ho")
            member = RoomUsername.objects.get(uid=uid,room_name=room_name)
            print(member)
        except RoomUsername.DoesNotExist:
            content = {'detail': 'No such member'}
            return JsonResponse(content, status = status.HTTP_404_NOT_FOUND)
        member.delete()
        return JsonResponse('Member deleted', safe=False)

