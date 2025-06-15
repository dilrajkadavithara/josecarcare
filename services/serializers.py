# Jose Car Care/services/serializers.py

from rest_framework import serializers
from .models import Service, Inquiry  # Import our Service and Inquiry models


class ServiceSerializer(serializers.ModelSerializer):
    """
    Serializer for the Service model.
    Translates Service model instances into JSON format for API responses.
    """

    class Meta:
        model = Service
        # 'fields' specifies which fields from the Service model should be included in the API output.
        # '__all__' means include all fields from the model.
        # It will include 'id', 'name', 'short_description', 'long_description',
        # 'is_active', 'created_at', 'updated_at'.
        fields = "__all__"


class InquirySerializer(serializers.ModelSerializer):
    """
    Serializer for the Inquiry model.
    Translates Inquiry model instances into JSON format for API responses and handles incoming data.
    """

    class Meta:
        model = Inquiry
        # '__all__' means include all fields from the model.
        # It will include 'id', 'customer_name', 'phone_number', 'is_contacted', 'created_at'.
        fields = "__all__"
