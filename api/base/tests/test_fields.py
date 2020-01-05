from django.test import TestCase
from rest_framework.serializers import Serializer
from base import CurrencyField


class CurrencySerializer(Serializer):
    value = CurrencyField()


class CurrencyFieldTestCase(TestCase):

    def test_serialize_data_correctly(self):
        serializer = CurrencySerializer({'value': 20.50})
        self.assertEqual(serializer.data['value'], 'R$ 20,50')

        serializer = CurrencySerializer({'value': 20})
        self.assertEqual(serializer.data['value'], 'R$ 20,00')

        serializer = CurrencySerializer({'value': 20.1})
        self.assertEqual(serializer.data['value'], 'R$ 20,10')
