# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapservice', '0002_auto_20151004_0639'),
    ]

    operations = [
        migrations.AddField(
            model_name='layer',
            name='directories',
            field=models.ManyToManyField(to='mapservice.Directory', verbose_name=b'\xe0\xb8\xab\xe0\xb8\xa1\xe0\xb8\xa7\xe0\xb8\x94\xe0\xb8\xab\xe0\xb8\xa1\xe0\xb8\xb9\xe0\xb9\x88'),
        ),
    ]
