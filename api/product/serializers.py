from rest_framework import serializers
from product.models import Product, Item
from base.fields import CurrencyField


class ProductSerializer(serializers.ModelSerializer):
    currency_unit_value = CurrencyField(source='unit_value', read_only=True)

    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'quantity',
            'unit_value',
            'currency_unit_value',
        ]


class ItemSerializer(serializers.ModelSerializer):

    class Meta:
        model = Item
        fields = [
            'product',
            'building'
        ]
