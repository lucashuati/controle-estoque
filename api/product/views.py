from rest_framework import viewsets, mixins
from product.models import Product
from product.serializers import ProductSerializer

class ProductViewSet(viewsets.GenericViewSet,
    mixins.ListModelMixin, mixins.RetrieveModelMixin):

    queryset = Product.objects.only('name', 'quantity', 'unit_value').all()
    serializer_class = ProductSerializer
