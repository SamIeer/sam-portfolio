from django.shortcuts import render , HttpResponse
from .models import Skill, Project
# Create your views here.
def home(request):
   skills = Skill.objects.all()
   projects = Project.objects.all()
   return render(request , 'index.html', {'Skill':skills, 'Project': projects})