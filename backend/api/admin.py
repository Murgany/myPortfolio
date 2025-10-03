from django.contrib import admin
from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
	list_display = ('title', 'link', 'created')
	prepopulated_fields = {'slug': ('title',)}
	search_fields = ('title', 'description')

