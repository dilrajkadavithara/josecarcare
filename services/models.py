# Jose Car Care/services/models.py

from django.db import models
from .validators import (
    validate_phone_number,
    validate_name_string,
)  # <-- NEW: Import both validators


class Service(models.Model):
    """
    Represents a specific detailing service offered by Jose Car Care.
    This model stores key information for dynamic display on the website.
    """

    name = models.CharField(
        max_length=200,
        unique=True,  # Ensures each service has a unique name
        help_text="The unique name of the detailing service (e.g., 'Exterior Detail').",
    )
    short_description = models.CharField(
        max_length=255,
        blank=True,  # This field is optional
        help_text="A brief, catchy summary of the service (1-2 sentences), ideal for lists or cards.",
    )
    long_description = models.TextField(
        blank=True,  # This field is optional
        null=True,  # Allows NULL in the database for empty entries
        help_text="A comprehensive, detailed description of what the service includes and its benefits.",
    )
    image = models.ImageField(  # <-- NEW: Add this line!
        upload_to="service_images/",  # Images will be stored in media/service_images/
        blank=True,  # Image is optional
        null=True,  # Allows NULL in the database if no image is uploaded
        help_text="An image representing the service. Will be displayed on service cards.",
    )
    is_active = models.BooleanField(
        default=True,
        help_text="Controls whether this service is currently offered and visible on the website.",
    )
    created_at = models.DateTimeField(
        auto_now_add=True, help_text="Timestamp when the service was first added."
    )
    updated_at = models.DateTimeField(
        auto_now=True, help_text="Timestamp when the service details were last updated."
    )

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "Services"

    def __str__(self):
        return self.name


class Inquiry(models.Model):
    """
    Represents a customer inquiry or lead for a callback.
    Designed for minimal friction lead generation with strict validation.
    """

    customer_name = models.CharField(
        max_length=20,  # <-- NEW: Max 20 characters
        validators=[validate_name_string],  # <-- NEW: Apply name string validator
        help_text="The full name of the customer inquiring (letters and spaces only, max 20 chars).",
    )
    phone_number = models.CharField(
        max_length=20,  # Max length for storage, validation handles actual digits.
        validators=[validate_phone_number],  # <-- NEW: Apply phone number validator
        help_text="The customer's phone number for a callback (must be 10 digits starting with 6,7,8,9).",
    )
    # is_contacted and created_at remain as before, no unique constraint on name/phone
    is_contacted = models.BooleanField(
        default=False,
        help_text="Internal flag: Has Jose Car Care followed up on this inquiry?",
    )
    created_at = models.DateTimeField(
        auto_now_add=True, help_text="Timestamp when the inquiry was submitted."
    )

    class Meta:
        ordering = ["-created_at"]
        verbose_name_plural = "Inquiries"

    def __str__(self):
        return f"Inquiry from {self.customer_name} ({self.phone_number})"
