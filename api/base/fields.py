from rest_framework import serializers
import re

class CurrencyField(serializers.DecimalField):
    def __init__(self, *args, **kwargs):
        super().__init__(
            max_digits=20,
            decimal_places=2,
            coerce_to_string=True,
            localize=True,
            *args,
            **kwargs
        )
        self._currency_pattern = re.compile(r'R\$ (?!0\d)\d+(?:,\d{2})')

    def to_representation(self, value):
        value = super().to_representation(value)
        value = value.replace('.', ',') if value else value
        return f'R$ {value}'
