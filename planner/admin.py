from django.contrib import admin
from .models import Program, ProgramPhase, Workout, WorkoutDay, WorkoutSession, UserProgram

# Register your models here.

admin.site.register(Program)
admin.site.register(ProgramPhase)
admin.site.register(Workout)
admin.site.register(WorkoutDay)
admin.site.register(WorkoutSession)
admin.site.register(UserProgram)