from django.urls import path
from .views import ContactAPIView, ProjectListAPIView
from django.urls import path, include, re_path
from django.views.generic import TemplateView


urlpatterns = [
    path('contact/', ContactAPIView.as_view(), name='contact'),
    path('projects/', ProjectListAPIView.as_view(), name='projects-list'),

    re_path(r'^(?!admin/|api/|static/|media/).*$', TemplateView.as_view(template_name='index.html')),

]
