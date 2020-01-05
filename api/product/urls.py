from rest_framework import routers
from product import views


router = routers.SimpleRouter(trailing_slash=False)
router.register('products', views.ProductViewSet, basename='product')


urlpatterns = router.urls
