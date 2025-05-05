# views.py
from rest_framework import viewsets
from .models import Skill, Project
from .serializers import SkillSerializer, ProjectSerializer
from django.shortcuts import render , HttpResponse

# Create your views here.
def home(request):
   skills = Skill.objects.all()
   projects = Project.objects.all()
   return render(request , 'index.html', {'skills': skills, 'projects': projects})  

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

