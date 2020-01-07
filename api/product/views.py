from rest_framework import viewsets, mixins
from product.models import Product
from product.serializers import ProductSerializer


class ProductViewSet(viewsets.GenericViewSet,
    mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
    mixins.UpdateModelMixin, mixins.CreateModelMixin):

    serializer_class = ProductSerializer

    def get_queryset(self):
        if self.action == 'destroy':
            return Product.objects.all()

        return Product.objects.only(
            'id', 'name', 'quantity', 'unit_value').all()
