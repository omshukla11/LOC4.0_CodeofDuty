from django.db import models

# Create your models here.

class MuscleGroup(models.Model): #group
    
    name = models.CharField(null = False, blank = False, max_length = 100)
    description = models.TextField(null = False, blank = True, max_length = 1000)
    benefits = models.TextField(null = False, blank = True, max_length = 1000)
    basics = models.TextField(null = False, blank = True, max_length = 1000)
    image = models.ImageField(upload_to = 'body/muscle_groups/', null = False, blank = True)
    
    def __str__(self):
        return self.name

class Muscle(models.Model): #per muscle
	
	name = models.CharField(null = False, blank = False, max_length = 100)
	description = models.TextField(null = False, blank = True, max_length = 1000)
	basics = models.TextField(null = False, blank = True, max_length = 1000)
	image = models.ImageField(upload_to = 'body/muscles/', null = False, blank = True)
	muscle_group = models.ForeignKey('body.MuscleGroup', null = True, on_delete = models.SET_NULL)

	def __str__(self):
		return self.name