from leaflet.forms.fields import PolygonField
from django import forms
from models import Zipcode
class LocationForm(forms.ModelForm):
    
    poly = PolygonField()
    
    class Meta:
        model = Zipcode
        fields = ['code', 'poly']

