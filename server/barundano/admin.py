from django.contrib import admin

# Register your models here.
from barundano.models import User, Meal

admin.site.register(User)
admin.site.register(Meal)