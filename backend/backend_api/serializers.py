from rest_framework import serializers
from .models import Project, Image, Judgement

class JudgementSerializer(serializers.ModelSerializer):
  class Meta:
    model = Judgement
    fields = ['first', 'second', 'first_duration', 'second_duration']

class ImageSerializer(serializers.ModelSerializer):
  judgement = JudgementSerializer(many=True, read_only=True)
  class Meta:
    model = Image
    fields = ['tissue', 'resolution', 'judgement']

class ProjectSerializer(serializers.ModelSerializer):
  images = ImageSerializer(many=True, read_only=True)
  class Meta:
    model = Project
    fields = ['title', 'type', 'path', 'images']


