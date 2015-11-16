from django.shortcuts import render

# Create your views here.
from django.core.serializers import serialize
from django.http import HttpResponseRedirect,HttpResponse
from django.core.urlresolvers import reverse
from .forms import LocationForm
from django.shortcuts import render_to_response
from .models import *
from django.views.decorators.csrf import csrf_exempt
from django.contrib.gis.geos import GEOSGeometry
import json

def testmap(request):
    # if this is a POST request we need to process the form data
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = LocationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            return HttpResponseRedirect(reverse('maplist'))
    
    # if a GET (or any other method) we'll create a blank form
    else:
        form = LocationForm()
    
    return render(request, 'testmap.html', {'form': form.as_p()})

@csrf_exempt
def overlay_feature(request):
    #wait //https://docs.djangoproject.com/en/1.8/ref/contrib/gis/serializers/
    #if request.method == 'POST':
    # selector_point
#   else:
#  if request.method == 'POST':
#       s=request;
#   else:
    b=json.loads(request.body)  #
    base_geom_to_find_wkt=b['wkt']
    base_geom_to_find=GEOSGeometry(base_geom_to_find_wkt)
    #a=json.loads(request.body)    #credit-->http://stackoverflow.com/questions/24068576/how-to-receive-json-data-using-http-post-request-in-django-1-6
    papa_filtered=papa.objects.filter(geom__coveredby=base_geom_to_find)
    s=serialize('geojson', papa_filtered,geometry_field='geom')
    return HttpResponse(s, content_type="application/json")
#return render(request, '_echo.html', {'echo': base_geom_to_find_wkt})



