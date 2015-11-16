# -*- coding: utf-8 -*-
from django.contrib.gis.db import models
#from django.db import models

# Create your models here.
class Directory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=256)
    description=models.TextField()
    class Meta:
        verbose_name = "หมวดหมู่ ชั้นข้อมูลแผนที่"
        verbose_name_plural = "หมวดหมู่ ชั้นข้อมูลแผนที่"
    
    def __unicode__(self):
        return "หมวดหมู่: %s" % self.name

        
class Layer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=256)
    description=models.TextField()
    directories = models.ManyToManyField(Directory, verbose_name="หมวดหมู่")
    #priority =models.IntField()
    #LeafletInstance   #สำหรับ เป็นค่า var ใน jscript ของ leaflet
    #LeafletName   #สำหรับ เป็นค่า var name ใน jscript ของ leaflet เพื่อ addToMap
    #LeafletOptScript #สำหรับ jscrip เสริมเพื่อ interactive ใน leaflet
    #LeafletOptStyle #สำหรับ style ของLeaflet
    class Meta:
        verbose_name = "ชั้นข้อมูลแผนที่"
        verbose_name_plural = "ชั้นข้อมูลแผนที่"
    def __unicode__(self):
        return str(self.name)



class Zipcode(models.Model):
    code = models.CharField(max_length=5,verbose_name='โค๊ด')
    poly = models.PolygonField()
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.code)


class papa(models.Model):
    f_order = models.FloatField()
    sta_name = models.CharField(max_length=254,verbose_name="ชื่อสถานี")
    mhu = models.FloatField()
    tambol = models.CharField(max_length=254)
    amphoe = models.CharField(max_length=254)
    province = models.CharField(max_length=254)
    qmaxm3day = models.FloatField()
    x = models.FloatField()
    y = models.FloatField()
    resource = models.CharField(max_length=254)
    geom = models.PointField(srid=4326)
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.sta_name)

class selector_point(models.Model):
    fid = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    geom = models.PointField(srid=4326)
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.created)

class selector_circle(models.Model):
    fid = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    radius = models.FloatField()
    geom = models.PointField(srid=4326)
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.created)


class selector_polygon(models.Model):
    fid = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    geom = models.PolygonField(srid=4326)
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.created)

class selector_line(models.Model):
    fid = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    geom = models.LineStringField(srid=4326)
    objects = models.GeoManager()
    def __unicode__(self):
        return str(self.created)


