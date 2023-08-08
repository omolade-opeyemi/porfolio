from django.shortcuts import render

# Create your views here.

def indexPage(request):
    return render(request, 'index.html')

def detailPage(request):
    return render(request , 'portfolio-details.html')

def haloSphere(request):
    return render(request, 'halosphere.html')

def client(request):
    return render(request, 'client.html')

def partners(request):
    return render(request, 'partners.html')

def commanders(request):
    return render(request, 'commanders.html')

def haloweb(request):
    return render(request, 'haloweb.html')

def venocrypt(request):
    return render(request, 'venocrypt.html ')

def supercrypt(request):
    return render(request, 'supercrypt.html')

def contract(request):
    return render(request, 'contract.html')

