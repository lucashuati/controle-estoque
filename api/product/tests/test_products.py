from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APIClient
from product.factories import ProductFactory
from product.serializers import ProductSerializer
from product.models import Product


class ProductFactoryTestCase(TestCase):

    def test_create_factory(self):
        ProductFactory()
        self.assertEqual(Product.objects.count(), 1)

    def test_create_batch_factory(self):
        ProductFactory.create_batch(5)
        self.assertEqual(Product.objects.count(), 5)


class ProductSerializerTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.product = ProductFactory(
            name='DVD PLAYER',
            quantity=4,
            unit_value=12.50,
        )
        cls.expected_serializer_data = {
            'name': 'DVD PLAYER',
            'quantity': 4,
            'unit_value': 'R$ 12,50',
        }

    def test_serializer_should_format_data_corretly(self):
        serializer = ProductSerializer(self.product)
        self.assertDictEqual(self.expected_serializer_data, serializer.data)


class ProductViewTestCase(TestCase):

    @classmethod
    def setUpTestData(cls):
        cls.products = ProductFactory.create_batch(5)
        cls.client = APIClient()
        cls.list_url = reverse('product-list')
        cls.detail_url = reverse('product-detail', args=[cls.products[0].pk])

    def test_retrieve_product(self):
        response = self.client.get(self.detail_url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, ProductSerializer(self.products[0]).data)

    def test_list_products(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data,
            ProductSerializer(self.products, many=True).data)
