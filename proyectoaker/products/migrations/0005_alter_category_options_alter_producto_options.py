# Generated by Django 4.2.11 on 2024-04-24 17:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_category_producto_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'categoría', 'verbose_name_plural': 'categorías'},
        ),
        migrations.AlterModelOptions(
            name='producto',
            options={'verbose_name': 'Producto', 'verbose_name_plural': 'Productos'},
        ),
    ]