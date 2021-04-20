from django.db import models

import datetime


class Book (models.Model):
    title = models.CharField(max_length=250, unique=True)
    author = models.CharField(max_length=250, blank=True)
    year_of_create = models.DateField(blank=True, default=datetime.date(1990, 1, 1))



