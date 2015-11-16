# -*- coding: utf-8 -*-
from django.conf.urls import url
from django.views.generic import TemplateView
from . import views


urlpatterns = [
               #url(r'^$', views.index, name='index'),
    url(r'^cgraph/', TemplateView.as_view(template_name="cgraph.html"),name='cgraph'),

]


