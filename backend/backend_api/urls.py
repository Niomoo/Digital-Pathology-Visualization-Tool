from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'User', views.UserViewSet, basename='user')

urlpatterns = [
    path('user/', views.UserListCreateAPIView.as_view(), name='user-list'),
    path('users/', views.user_list),
    path('user/<int:pk>', views.UserDetailAPIView.as_view(), name='user-detail'),
    path('project/', views.ProjectListCreateAPIView.as_view(), name='project-list'),
    path('project/<int:pk>', views.ProjectDetailAPIView.as_view(), name='project-detail'),
    path('image/', views.UserListCreateAPIView.as_view(), name='image-list'),
    path('image/<int:pk>', views.UserDetailAPIView.as_view(), name='image-detail'),
    path('judgement/', views.UserListCreateAPIView.as_view(), name='judgement-list'),
    path('judgement/<int:pk>', views.UserDetailAPIView.as_view(), name='judgement-detail'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
