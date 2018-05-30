from rest_framework import serializers
from .models import Menu

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('item_name', 'item_price', 'item_size')
        # lookup_field = 'item_name'
        model = Menu
