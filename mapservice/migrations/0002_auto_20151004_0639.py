# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mapservice', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Directory',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=256)),
                ('description', models.TextField()),
            ],
            options={
                'verbose_name': '\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48 \u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48',
                'verbose_name_plural': '\u0e2b\u0e21\u0e27\u0e14\u0e2b\u0e21\u0e39\u0e48 \u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48',
            },
        ),
        migrations.AlterModelOptions(
            name='layer',
            options={'verbose_name': '\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48', 'verbose_name_plural': '\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48'},
        ),
    ]
