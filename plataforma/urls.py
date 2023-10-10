from django.urls import path
from .models import *
from . import views

urlpatterns = [
    path('',views.main,name='main'),
    path('entrar/',views.entrar,name='entrar'),
    path('cadastrar/',views.cadastrar,name='cadastrar'),
    path('ajuda/',views.ajuda,name='ajuda')
]