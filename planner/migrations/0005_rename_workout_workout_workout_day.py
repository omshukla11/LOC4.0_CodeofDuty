# Generated by Django 3.2.12 on 2022-03-12 15:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('planner', '0004_auto_20220312_2036'),
    ]

    operations = [
        migrations.RenameField(
            model_name='workout',
            old_name='workout',
            new_name='workout_day',
        ),
    ]
