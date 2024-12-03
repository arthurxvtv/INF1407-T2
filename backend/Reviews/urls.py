"""
URL configuration for Reviews project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.urls import path
from ReviewApp.views import Autenticar, Reviews, Logout, Registrar, AlterarSenha

urlpatterns = [
    path("admin/", admin.site.urls),
    path("login/", Autenticar.as_view(), name="login"),
    path("logout/", Logout.as_view(), name="logout"),
    path("register/", Registrar.as_view(), name="register"),
    path("alterar-senha/", AlterarSenha.as_view(), name="alterar-senha"),
    path("reviews/", Reviews.as_view({"get": "list", "post": "create"}), name="reviews"),
    path("reviews/<int:pk>/", Reviews.as_view({"get": "retrieve", "patch": "partial_update", "delete": "destroy"}), name="reviews"),
]