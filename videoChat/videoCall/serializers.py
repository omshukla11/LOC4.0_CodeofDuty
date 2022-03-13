from rest_framework import serializers
from .models import RoomUsername

class RoomUsernameSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomUsername
        fields = '__all__'

    # def save(self,validated_data):
    #     username,created = RoomUsername.objects.get_or_create(name=validated_data.get('name'),
    #                                         uid=validated_data.get('uid'),
    #                                         room_name=validated_data.get('room_name')
    #                                         )
    #     return username
