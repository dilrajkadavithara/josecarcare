# Jose Car Care/JoseCarCareBackend/JoseCarCareBackend/urls.py

from django.contrib import admin
from django.urls import path, include  # <-- NEW: Import include
from django.conf import settings  # <-- NEW: Import settings
from django.conf.urls.static import static  # <-- NEW: Import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("services.urls")),
    
]


# Only add this if DEBUG is True (which it is in development)
if settings.DEBUG:  # <-- NEW: Add this if block
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    # Optional: Serve static files in development (though React dev server handles most of that)
    # urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
