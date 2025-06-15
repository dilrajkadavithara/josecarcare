from django.contrib import admin
from .models import Service, Inquiry

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'is_active', 'created_at', 'updated_at')
    search_fields = ('name',)
    list_filter = ('is_active', 'created_at')
    readonly_fields = ('created_at', 'updated_at')
    ordering = ('-created_at',)
    fieldsets = (
        (None, {'fields': ('name', 'short_description', 'long_description', 'image', 'is_active')}),
        ('Timestamps', {'fields': ('created_at', 'updated_at')}),
    )

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'phone_number', 'is_contacted', 'created_at')
    search_fields = ('customer_name', 'phone_number')
    list_filter = ('is_contacted', 'created_at')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)
