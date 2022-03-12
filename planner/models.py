from django.db import models

# Create your models here.

class Program(models.Model):
	
	LEVEL = (('BE', 'Beginner'), ('IN', 'Intermediate'), ('AD', 'Advanced'),)
	TYPE = (('BU', 'Bulking'), ('CU', 'Cutting'), ('MA', 'Maintaining'),)

	name = models.CharField(null = False, blank = False, max_length = 100)
	image = models.ImageField(upload_to = 'planner/program/', null = False, blank = True)
	summary = models.TextField(null = False, blank = True, max_length = 1500)
	level = models.CharField(max_length = 2, choices = LEVEL, default = 'IN')
	goal = models.CharField(max_length = 2, choices = TYPE, default = 'MA')
	start_date = models.DateTimeField(null = False, blank = False, auto_now_add=True)
	end_date = models.DateTimeField(null = False, blank = False)
	phases = models.ManyToManyField('planner.ProgramPhase')

	
	def __str__(self):
		return self.name


class ProgramPhase(models.Model):
	order = models.PositiveIntegerField(blank = False, null = False)
	weeks_duration = models.PositiveIntegerField(blank = False, null = False)
	workout = models.ForeignKey('planner.Workout', null = True, on_delete = models.SET_NULL)
	
	def __str__(self):
		return self.workout.name
    
	class Meta:
		ordering = ['order']


class Workout(models.Model):
	
	name = models.CharField(null = False, blank = False, max_length = 100)
	image = models.ImageField(upload_to = 'planner/workout/', null = False, blank = False)
	day = models.ManyToManyField('planner.WorkoutDay')

	
	def __str__(self):
		return self.name


class WorkoutDay(models.Model):
	
	DAY = (('MO', 'Monday'), ('TU', 'Tuesday'), ('WE', 'Wednesday'), ('TH', 'Thursday'), ('FR', 'Friday'),
	('SA', 'Saturday'), ('SU', 'Sunday'),)

	
	day_of_week = models.CharField(max_length = 2, choices = DAY, default = 'MO')
	session = models.ForeignKey('planner.WorkoutSession', null = False, on_delete = models.CASCADE)

	
	def __str__(self):
		return self.day_of_week + ' - ' + self.session.name


class WorkoutSession(models.Model):
	
	name = models.CharField(null = False, blank = False, max_length = 100)
	summary = models.TextField(null = False, blank = True, max_length = 1000)
	recommendations = models.TextField(null = False, blank = True, max_length = 1000)
	motivation_quotes = models.TextField(null = False, blank = True, max_length = 1000)
	exercises = models.ManyToManyField('gym.ExerciseSet')

	
	def __str__(self):
		return self.name
