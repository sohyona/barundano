
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('barundano/', include('barundano.urls')),
    path('admin/', admin.site.urls),
]
