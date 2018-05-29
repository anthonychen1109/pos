from django.db import models

# Create your models here.
class Menu(models.Model):
    PORTION_SIZE = (
        ('S', 'Small'),
        ('M', 'Medium'),
        ('L', 'Large')
    )
    item_name = models.CharField(max_length=255, blank=False)
    item_price = models.DecimalField(max_digits=5, decimal_places=2, blank=False)
    item_size = models.CharField(max_length=1, choices=PORTION_SIZE, default='S')
