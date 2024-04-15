from django.contrib import admin
from .models import Producto
# Register your models here.

class ProductoAdmin(admin.ModelAdmin):
    
    list_display = ('title', 'description', 'image', 'quantity', 'precio_formato')




    #Variable Price formateada a Miles
    def precio_formato(self, obj):

        return "{:,.0f}".format(float(obj.price)).replace(',', '.')

    precio_formato.short_description = 'Precio'

admin.site.register(Producto, ProductoAdmin)