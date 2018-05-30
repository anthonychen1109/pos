from django.db import models

# Create your models here.
class Menu(models.Model):
    item_name = models.CharField(max_length=255, blank=False, unique=True)
    item_price = models.DecimalField(max_digits=5, decimal_places=2, blank=False)
    item_size = models.CharField(max_length=1, default='S', blank=False)
