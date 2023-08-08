from django.urls import path
from .views import indexPage, detailPage, haloSphere,client,partners,commanders,venocrypt, haloweb, supercrypt, contract

urlpatterns = [
    path('', indexPage),
    path('detail/', detailPage, name='detail'),
    path('haloshere/', haloSphere, name= 'haloshere'),
    path('rollsafe-client/', client, name='client'),
    path('rollsafe-partners/', partners, name='partners'),
    path('rollsafe-resources/', commanders, name='commanders'),
    path('website/', haloweb, name='haloweb'),
    path('venocrypt/', venocrypt, name='venocrypt'),
    path('supercrypt/', supercrypt, name = 'supercrypt'),
    path('contract/', contract, name='contract')
]
