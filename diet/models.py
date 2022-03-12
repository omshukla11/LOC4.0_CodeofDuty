from django.db import models

# Create your models here.
def upload_path_handler(instance, filename): 
    return "Recipe_Image/{title}/{file}".format(
        title=instance.recipe_name, file=filename
    )

class Recipe(models.Model):
    recipe_name        = models.CharField(max_length=255)
    recipe_image       = models.ImageField(upload_to=upload_path_handler)
    recipe_description = models.TextField()
    recipe_ingredients = models.TextField()
    recipe_steps       = models.TextField()
    #recipe_category   = models.ForeignKey(Category)
    # recipe_region      = models.CharField(max_length=255,choices=REGION_CHOICES,default='No State')
    cooking_time       = models.CharField(max_length=255) #should make this into a integer or decimal field 
    recipe_added_at    = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.recipe_name
    
    class Meta:
        ordering=['recipe_added_at',]