
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Program(models.Model): #categories boxing,cricket,yoga,gym
	
	LEVEL = (('BE', 'Beginner'), ('IN', 'Intermediate'), ('AD', 'Advanced'),)
	TYPE = (('BU', 'Bulking'), ('CU', 'Cutting'), ('MA', 'Maintaining'),)

	name = models.CharField(null = False, blank = False, max_length = 100)
	image = models.ImageField(upload_to = 'planner/program/', null = False, blank = True)
	summary = models.TextField(null = False, blank = True, max_length = 1500)
	level = models.CharField(max_length = 2, choices = LEVEL, default = 'IN')
	goal = models.CharField(max_length = 2, choices = TYPE, default = 'MA')
	# start_date = models.DateTimeField(null = False, blank = False, auto_now_add=True)
	# end_date = models.DateTimeField(null = False, blank = False)
	# phases = models.ManyToManyField('planner.ProgramPhase')

	
	def __str__(self):
		return self.name

class UserProgram(models.Model):
	user_id = models.ForeignKey(User,on_delete=models.CASCADE)
	program_id = models.ForeignKey(Program,on_delete=models.CASCADE)
	start_date = models.DateTimeField(null = False, blank = False, auto_now_add=True)
	end_date = models.DateTimeField(null = False, blank = False)
	complete = models.BooleanField(default=False)
	exercise_in_program = models.IntegerField(default=0)

	def __str__(self) -> str:
		return self.user_id.email + " " + self.program_id.name

class ProgramPhase(models.Model): #if selected cricket toh idhr different programs in cricket
	user_prog_id = models.ForeignKey(UserProgram,on_delete=models.CASCADE,null=True,blank=True)
	order = models.PositiveIntegerField(blank = False, null = False)
	weeks_duration = models.PositiveIntegerField(blank = False, null = False)
	workout = models.ForeignKey('planner.Workout', null = True, on_delete = models.SET_NULL)
	
	def __str__(self):
		return self.workout.name
    
	class Meta:
		ordering = ['order']


class Workout(models.Model): #on program in cricket ka workout ka name nad image
	user_prog_id = models.ForeignKey(UserProgram,on_delete=models.CASCADE,null=True,blank=True)
	name = models.CharField(null = False, blank = False, max_length = 100)
	image = models.ImageField(upload_to = 'planner/workout/', null = False, blank = False)
	# day = models.ManyToManyField('planner.WorkoutDay')
	workout_day = models.ForeignKey('planner.WorkoutDay',on_delete=models.CASCADE)

	
	def __str__(self):
		return self.name


class WorkoutDay(models.Model): #days of the week for that workout
	
	DAY = (('MO', 'Monday'), ('TU', 'Tuesday'), ('WE', 'Wednesday'), ('TH', 'Thursday'), ('FR', 'Friday'),
	('SA', 'Saturday'), ('SU', 'Sunday'),)

	user_prog_id = models.ForeignKey(UserProgram,on_delete=models.CASCADE,null=True,blank=True)
	day_of_week = models.CharField(max_length = 2, choices = DAY, default = 'MO')
	session = models.ForeignKey('planner.WorkoutSession', null = False, on_delete = models.CASCADE)

	
	def __str__(self):
		return self.day_of_week + ' - ' + self.session.name


class WorkoutSession(models.Model): #per workout layout
	user_prog_id = models.ForeignKey(UserProgram,on_delete=models.CASCADE,null=True,blank=True)
	name = models.CharField(null = False, blank = False, max_length = 100)
	summary = models.TextField(null = False, blank = True, max_length = 1000)
	recommendations = models.TextField(null = False, blank = True, max_length = 1000)
	motivation_quotes = models.TextField(null = False, blank = True, max_length = 1000)
	# exercises = models.ManyToManyField('gym.ExerciseSet')

	
	def __str__(self):
		return self.name


