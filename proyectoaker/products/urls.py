from django.urls import path

from . import views


urlpatterns = [
    path("products", views.productsListView.as_view(), name="products"),
    path("search-products", views.productsListByKword.as_view(), name="search-products"),
]
