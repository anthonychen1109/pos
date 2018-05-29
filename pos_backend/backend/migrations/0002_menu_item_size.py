# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-29 19:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='item_size',
            field=models.CharField(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')], default='S', max_length=1),
        ),
    ]