from django.shortcuts import render
from rest_framework import viewsets
from .models import Menu
from .serializers import MenuSerializer

# Create your views here.

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    lookup_field = 'item_name'
