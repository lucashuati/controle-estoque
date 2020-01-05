from django.db import models

from base.models import LoggedModel


class Building(LoggedModel):
    name = models.CharField(max_length=200)
