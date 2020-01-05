from django.db import models

from base import LoggedModel


class Product(LoggedModel):
    name = models.CharField(max_length=200, unique=True)
    quantity = models.IntegerField()
    unit_value = models.DecimalField(max_digits=20, decimal_places=2)


class Item(LoggedModel):
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    building = models.ForeignKey('building.Building', on_delete=models.PROTECT)
