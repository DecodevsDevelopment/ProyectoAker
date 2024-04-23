from django.shortcuts import render
from .models import Producto
from django.db.models import Q
from django.views.generic import (
        TemplateView,
        ListView,
)

class productDetail(ListView):
        template_name = "core/proteinas.html"
        context_object_name = "detailProductsList"
        model = Producto

class productsListView(ListView):
        template_name = "core/products.html"
        context_object_name = "listaProductos"
        model = Producto



class productsListByKword(ListView):
        template_name = "core/search-products.html"
        context_object_name = "productos"
        model = Producto
        
        def get_queryset(self):
                palabra_clave = self.request.GET.get("kword", '')
                if palabra_clave:
                        queryset = Producto.objects.filter(Q(title__icontains=palabra_clave) | 
                                                Q(description__icontains=palabra_clave))
                        print(palabra_clave)
                        return queryset
                        
                else:
                        return Producto.objects.none()
