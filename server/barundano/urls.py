from django.urls import path

from . import views

urlpatterns = [
    path('timesuggest/', views.TimeSuggestView, name='TimeSuggestView'),
    path('mealregist/', views.MealRegistView, name='MealRegistView'),
]