# Jose Car Care/services/views.py

from rest_framework import viewsets  # Import viewsets from DRF
from .models import Service, Inquiry  # Import your Service and Inquiry models
from .serializers import ServiceSerializer, InquirySerializer  # Import your Serializers


class ServiceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows services to be viewed or edited.
    Provides list, retrieve, create, update, and destroy actions.
    """

    queryset = (
        Service.objects.all().filter(is_active=True).order_by("name")
    )  # Only show active services, ordered by name
    serializer_class = ServiceSerializer
    # Optional: permission_classes = [permissions.IsAuthenticatedOrReadOnly] # For later, if you want to restrict who can edit


class InquiryViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows inquiries to be viewed or created.
    Provides list, retrieve, create, update, and destroy actions.
    """

    queryset = Inquiry.objects.all().order_by(
        "-created_at"
    )  # Order by most recent inquiry first
    serializer_class = InquirySerializer
    # For security, you might later add permissions here to restrict who can view/edit inquiries.
    # For now, we'll allow creation without authentication.
