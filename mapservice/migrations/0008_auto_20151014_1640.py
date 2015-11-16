# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapservice', '0007_auto_20151014_1638'),
    ]

    operations = [
        migrations.AlterField(
            model_name='papa',
            name='sta_name',
            field=models.CharField(max_length=254, verbose_name=b'\xe0\xb8\x8a\xe0\xb8\xb7\xe0\xb9\x88\xe0\xb8\xad\xe0\xb8\xaa\xe0\xb8\x96\xe0\xb8\xb2\xe0\xb8\x99\xe0\xb8\xb5'),
        ),
    ]
