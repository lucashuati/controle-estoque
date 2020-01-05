from rest_framework import serializers
from product.models import Product, Item
from base.fields import CurrencyField


class ProductSerializer(serializers.ModelSerializer):
    unit_value = CurrencyField()

    class Meta:
        model = Product
        fields = [
            'name',
            'quantity',
            'unit_value'
        ]


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = [
            'product',
            'building'
        ]
