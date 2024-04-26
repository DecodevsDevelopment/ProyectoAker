from django.shortcuts import render, get_object_or_404
from .models import Producto, Category
from django.db.models import Q
from django.views.generic import (
        TemplateView,
        ListView,
        DetailView,
)


#def category(request):
        # Obtener todas las categorías
 #       categorias = Category.objects.all()





# Ver listado de productos #
class productsListView(ListView):
        template_name = "core/products.html"
        model = Producto

        def get_context_data(self):
                context = super(productsListView, self).get_context_data()
                context['categories'] = Category.objects.all()
                context['products'] = Producto.objects.all()

                return context



# Filtrado de productos por letras #
class productsListByKword(ListView):
        template_name = "core/search-products.html"
        context_object_name = "productos"
        model = Producto

        def get_context_data(self, **kwargs):
                context = super().get_context_data(**kwargs)
                context['categories'] = Category.objects.all()
                context['products'] = Producto.objects.all()
                return context

        def get_queryset(self):
                queryset = Producto.objects.all()

                palabra_clave = self.request.GET.get("kword", '')
                categoria = self.request.GET.get("categoria", '')

                if palabra_clave:
                        queryset = queryset.filter(
                                Q(title__icontains=palabra_clave) | Q(description__icontains=palabra_clave))

                if categoria:
                        queryset = queryset.filter(category__name__icontains=categoria)

                return queryset




#View del detalle de cada producto
class productDetail(DetailView):
        template_name = "core/product-detail.html"
        model = Producto

        def get_context_data(self, **kwargs):
                context = super(productDetail, self).get_context_data(**kwargs)
                context['title'] = 'Keto'

                return context



