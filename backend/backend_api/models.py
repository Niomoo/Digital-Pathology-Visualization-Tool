from django.db import models

# Create your models here.
class Project(models.Model):
  p_id = models.AutoField(primary_key=True)
  title = models.CharField(max_length=255)
  type = models.CharField(max_length=255)
  path = models.CharField(max_length=255)

class Image(models.Model):
  i_id = models.AutoField(primary_key=True)
  p_id = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
  tissue = models.CharField(max_length=255, blank=True, null=True)
  resolution = models.CharField(max_length=10, blank=True, null=True)

class Judgement(models.Model):
  j_id = models.AutoField(primary_key=True)
  i_id = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='judgement')
  first = models.CharField(max_length=255)
  second = models.CharField(max_length=255, blank=True, null=True)
  first_duration = models.DateTimeField(blank=True, null=True)
  second_duration = models.DateTimeField(blank=True, null=True)

