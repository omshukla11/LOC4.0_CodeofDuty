from django.contrib import admin
from .models import Exercise, ExerciseSet, Set

# Register your models here.

admin.site.register(Exercise)
admin.site.register(ExerciseSet)
admin.site.register(Set)