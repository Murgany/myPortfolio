from django.urls import path, include, re_path
from django.contrib import admin
# from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static


# Serve the React app's index.html at the root and as a fallback for client-side routes.
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # Catch-all - serve React's index.html for client-side routes, but do NOT
    # intercept requests for admin, api, static, or media so those are handled
    # by Django first. The negative lookahead allows CommonMiddleware to still
    # perform trailing-slash redirects (e.g. /admin -> /admin/).
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
