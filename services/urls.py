# Jose Car Care/services/urls.py

from django.urls import include, path
from rest_framework.routers import DefaultRouter  # Import DefaultRouter
from .views import ServiceViewSet, InquiryViewSet  # Import your ViewSets

# Create a router instance
router = DefaultRouter()

# Register your ViewSets with the router
# The first argument is the URL prefix for this ViewSet (e.g., /api/services/)
# The second argument is the ViewSet class itself
# The 'basename' argument is used to name the URL patterns created by the router
router.register(r"services", ServiceViewSet, basename="service")
router.register(r"inquiries", InquiryViewSet, basename="inquiry")

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path("", include(router.urls)),  # This includes all URLs generated by the router
]
