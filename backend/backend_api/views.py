from rest_framework import generics, viewsets, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Project, Image, Judgement
from .serializers import UserSerializer, ProjectSerializer, ImageSerializer, JudgementSerializer
# Create your views here.


class UserListCreateAPIView(generics.ListCreateAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer
class UserDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = User.objects.all()
  serializer_class = UserSerializer

@api_view(['GET', 'POST'])
def user_list(request, format=None):
  if request.method == 'GET':
    users = User.objects.all()
    serializer= UserSerializer(users, many=True)
    return Response(serializer.data)
  elif request.method == 'POST':
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProjectListCreateAPIView(generics.ListCreateAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
class ProjectDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer

@api_view(['GET'])
def project_list(request, pk, format=None):
  if request.method == 'GET':
    user = User.objects.get(name=pk)
    projects = Project.objects.filter(u_id=user.u_id)
    serializer= ProjectSerializer(projects, many=True)
    return Response(serializer.data)

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
