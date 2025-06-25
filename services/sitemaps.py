from django.contrib.sitemaps import Sitemap
from django.urls import reverse
from .models import Service
from django.db import models
from django.conf import settings

class StaticViewSitemap(Sitemap):
    priority = 0.5
    changefreq = 'monthly'

    def items(self):
        return ['home', 'about', 'contact']

    def location(self, item):
         return settings.SITE_URL + reverse(item)
       
class ServiceSitemap(Sitemap):
    priority = 0.7
    changefreq = 'weekly'
    updated_at = models.DateTimeField(auto_now=True)

    def items(self):
        return Service.objects.all()

    def lastmod(self, obj):
        return obj.updated_at  # assuming your model has this field
    def location(self, obj):
        return settings.SITE_URL + obj.get_absolute_url()
      
SITE_URL = "https://joscarcare.com"
