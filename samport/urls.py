from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *
from samport import views 

router = DefaultRouter()
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)



urlpatterns = [
    path('api/', include(router.urls)),       # REST API endpoints like /api/skills/
    path('', views.home, name="home")         # Your regular homepage view
]


