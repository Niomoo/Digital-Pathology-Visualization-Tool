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
class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer

@api_view(['GET', 'POST'])
def user_list(request):
  if request.method == 'GET':
    users = User.objects.all()
    serializer= UserSerializer(users, many=True)
    return Response(serializer.data)
  elif request.method == 'POST':
    serializer = UserSerializer(data = request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_404_BAR_REQUEST)


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
