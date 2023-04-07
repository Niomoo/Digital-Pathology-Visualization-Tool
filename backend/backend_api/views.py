from rest_framework import generics, viewsets
from .models import User, Project, Image, Judgement
from .serializers import UserSerializer, ProjectSerializer, ImageSerializer, JudgementSerializer
# Create your views here.

class UserListCreateAPIView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

class ProjectListCreateAPIView(generics.ListCreateAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
class ProjectDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

class ImageListCreateAPIView(generics.ListCreateAPIView):
  queryset = Image.objects.all()
  serializer_class = ImageSerializer
class ImageDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Image.objects.all()
  serializer_class = ImageSerializer

class JudgementListCreateAPIView(generics.ListCreateAPIView):
  queryset = Judgement.objects.all()
  serializer_class = JudgementSerializer
class JudgementDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Judgement.objects.all()
  serializer_class = JudgementSerializer
