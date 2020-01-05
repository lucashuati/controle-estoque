import factory
from base import BASE_PRODUCT_NAMES

class ProductFactory(factory.django.DjangoModelFactory):
    name = factory.Iterator(BASE_PRODUCT_NAMES)
    quantity = factory.Faker('pydecimal', min_value=1, max_value=99999, positive=True)
    unit_value = factory.Faker('pyint')

    class Meta:
        model = 'product.Product'
