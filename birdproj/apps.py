from importlib import import_module

from django.apps import AppConfig as BaseAppConfig


class AppConfig(BaseAppConfig):

    name = "birdproj"

    def ready(self):
        import_module("birdproj.receivers")
        import_module("birdproj.profiles.receivers")
        import_module("wiki.receivers")  # @@@ upgrade pinax-wiki to load in it's own apps.py
