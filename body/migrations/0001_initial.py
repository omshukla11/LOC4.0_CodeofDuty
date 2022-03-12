# Generated by Django 4.0.1 on 2022-03-12 18:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MuscleGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, max_length=1000)),
                ('benefits', models.TextField(blank=True, max_length=1000)),
                ('basics', models.TextField(blank=True, max_length=1000)),
                ('image', models.ImageField(blank=True, upload_to='body/muscle_groups/')),
            ],
        ),
        migrations.CreateModel(
            name='Muscle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True, max_length=1000)),
                ('basics', models.TextField(blank=True, max_length=1000)),
                ('image', models.ImageField(blank=True, upload_to='body/muscles/')),
                ('muscle_group', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='body.musclegroup')),
            ],
        ),
    ]
