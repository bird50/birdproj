from django.contrib.gis.utils import LayerMapping
from mapservice.models import papa
from django.contrib.staticfiles import finders
shp_path = finders.find('shape/papa.shp')
papa_mapping = {
    'f_order' : 'f_order',
    'sta_name' : 'sta_name',
    'mhu' : 'mhu',
    'tambol' : 'tambol',
    'amphoe' : 'amphoe',
    'province' : 'province',
    'qmaxm3day' : 'QmaxM3day',
    'x' : 'X',
    'y' : 'Y',
    'resource' : 'resource',
    'f11' : 'F11',
    'f12' : 'F12',
    'f13' : 'F13',
    'f14' : 'F14',
    'f15' : 'F15',
    'f16' : 'F16',
    'f17' : 'F17',
    'f18' : 'F18',
    'f19' : 'F19',
    'f20' : 'F20',
    'f21' : 'F21',
    'f22' : 'F22',
    'f23' : 'F23',
    'f24' : 'F24',
    'f25' : 'F25',
    'f26' : 'F26',
    'f27' : 'F27',
    'f28' : 'F28',
    'f29' : 'F29',
    'f30' : 'F30',
    'f31' : 'F31',
    'f32' : 'F32',
    'f33' : 'F33',
    'geom' : 'POINT',
}

lm = LayerMapping(papa, shp_path, papa_mapping)
lm.save(verbose=True)
