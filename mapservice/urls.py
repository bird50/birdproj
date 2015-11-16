# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.views.generic import TemplateView
from . import views
from geojson_tiles.views import GeoJSONTile
from mapservice.models import papa

#properties_for_geometry_field={'sta_name': 'ชื่อสถานี','province':'จังหวัด'}
urlpatterns = [
               #url(r'^$', views.index, name='index'),
    url(r'^map001/', TemplateView.as_view(template_name="map.html"),name='map001'),
     url(r'^map002/', TemplateView.as_view(template_name="map_draw.html"),name='map002'),
               #url(r'^testmap/', TemplateView.as_view(template_name="testmap.html"),name='testmap'),
               url(r'^testmap2/', views.testmap,name='testmap2'),
               #url(r'^maplist/', TemplateView.as_view(template_name="maplist.html"),name='maplist'),
               # url(r'^papatiles/(?P<z>\d+)/(?P<x>\d+)/(?P<y>\d+).json$',GeoJSONTile(papa, geometry_field='geom', trim_to_boundary=True,properties=properties_for_geometry_field)),
                url(r'^papatiles/(?P<z>\d+)/(?P<x>\d+)/(?P<y>\d+).json$',GeoJSONTile(papa, geometry_field='geom', trim_to_boundary=True)),
    url(r'^overlay_feature/', views.overlay_feature,name='overlay_feature'),

]


