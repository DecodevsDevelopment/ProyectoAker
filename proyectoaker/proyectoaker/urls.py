from django.contrib import admin
from django.urls import path, re_path, include
from core import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', views.index, name="index"),


    re_path('', include('about.urls')),
    re_path('', include('contact.urls')),
    re_path('', include('products.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


