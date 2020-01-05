from django.db import models
from simple_history.models import HistoricalRecords


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        if hasattr(self, 'name'):
            return self.name
        return super().__str__()

    class Meta:
        abstract = True

class LoggedModel(BaseModel):
    history = HistoricalRecords(inherit=True)

    class Meta:
        abstract = True
