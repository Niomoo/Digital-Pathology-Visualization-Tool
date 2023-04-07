from rest_framework import viewsets

from .models import User, Project, Image, Judgement
from .serializers import UserSerializer, ProjectSerializer, ImageSerializer, JudgementSerializer
# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

class ImageViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = Image.objects.all()
  serializer_class = ImageSerializer

class JudgementViewSet(viewsets.ReadOnlyModelViewSet):
  queryset = Judgement.objects.all()
  serializer_class = JudgementSerializer
