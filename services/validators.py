# Jose Car Care/services/validators.py

import re
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_phone_number(value):
    """
    Validates that the phone number is exactly 10 digits long
    and starts with 6, 7, 8, or 9.
    """
    # Define the regular expression pattern
    # ^   - asserts position at the start of the string
    # [6-9] - matches a single digit from 6 to 9
    # \d{9} - matches exactly 9 digits (0-9)
    # $   - asserts position at the end of the string
    phone_regex = r"^[6-9]\d{9}$"

    if not re.fullmatch(phone_regex, value):
        raise ValidationError(
            _(
                'Phone number "%(value)s" is not valid. It must be 10 digits and start with 6, 7, 8, or 9.'
            ),
            params={"value": value},
            code="invalid_phone_number",  # A unique code for this specific error
        )


def validate_name_string(value):
    """
    Validates that the name contains only alphabetic characters and spaces.
    """
    # Regex to match only letters (uppercase and lowercase) and spaces
    name_regex = r"^[a-zA-Z\s]+$"

    if not re.fullmatch(name_regex, value):
        raise ValidationError(
            _('Name "%(value)s" must contain only letters and spaces.'),
            params={"value": value},
            code="invalid_name_string",
        )
