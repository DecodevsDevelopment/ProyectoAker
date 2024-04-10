from django.contrib import admin
from django.urls import path, re_path, include
from core import views as core_views

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', core_views.index, name="index"),


    re_path('', include('about.urls')),
    re_path('', include('contact.urls')),
    #re_path('', include('products.urls')),
]
