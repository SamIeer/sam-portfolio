from django.db import models

# Create your models here.
class Skill(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    iimage_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.name
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to=' projects/',blank=True)
    url = models.URLField(blank=True)

    def __str__(self):
        return self.title