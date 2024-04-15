from django.db import models


class Producto(models.Model):
    title = models.CharField(max_length=200, verbose_name="Título")
    description = models.TextField(verbose_name="Descripcion")
    image = models.ImageField(verbose_name="Imagen", null=True, blank=True, upload_to="products")
    quantity = models.IntegerField(verbose_name="Cantidad", default=0)
    price = models.FloatField(verbose_name="Precio")

    def __str__(self):
        return self.title
