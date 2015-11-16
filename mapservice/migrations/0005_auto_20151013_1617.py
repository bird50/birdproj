# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.contrib.gis.db.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('mapservice', '0004_zipcode'),
    ]

    operations = [
        migrations.CreateModel(
            name='papa',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('f_order', models.FloatField()),
                ('sta_name', models.CharField(max_length=254)),
                ('mhu', models.FloatField()),
                ('tambol', models.CharField(max_length=254)),
                ('amphoe', models.CharField(max_length=254)),
                ('province', models.CharField(max_length=254)),
                ('qmaxm3day', models.FloatField()),
                ('x', models.FloatField()),
                ('y', models.FloatField()),
                ('resource', models.CharField(max_length=254)),
                ('f11', models.FloatField()),
                ('f12', models.CharField(max_length=254)),
                ('f13', models.FloatField()),
                ('f14', models.FloatField()),
                ('f15', models.CharField(max_length=254)),
                ('f16', models.CharField(max_length=254)),
                ('f17', models.CharField(max_length=254)),
                ('f18', models.CharField(max_length=254)),
                ('f19', models.CharField(max_length=254)),
                ('f20', models.CharField(max_length=254)),
                ('f21', models.CharField(max_length=254)),
                ('f22', models.CharField(max_length=254)),
                ('f23', models.CharField(max_length=254)),
                ('f24', models.CharField(max_length=254)),
                ('f25', models.CharField(max_length=254)),
                ('f26', models.FloatField()),
                ('f27', models.CharField(max_length=254)),
                ('f28', models.CharField(max_length=254)),
                ('f29', models.CharField(max_length=254)),
                ('f30', models.CharField(max_length=254)),
                ('f31', models.CharField(max_length=254)),
                ('f32', models.CharField(max_length=254)),
                ('f33', models.CharField(max_length=254)),
                ('geom', django.contrib.gis.db.models.fields.PointField(srid=-1)),
            ],
        ),
        migrations.AlterField(
            model_name='zipcode',
            name='code',
            field=models.CharField(max_length=5, verbose_name=b'\xe0\xb9\x82\xe0\xb8\x84\xe0\xb9\x8a\xe0\xb8\x94'),
        ),
    ]
