from django.contrib.staticfiles import finders
shp_path = finders.find('/shape/papa.shp')
ogrinspect shp_path papa --srid=4326 --mapping
