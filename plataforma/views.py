from django.http import HttpResponse
from django.template import loader
from .models import *

links = {
    "Início": "",
    "Entrar": "entrar",
    "Quem somos?": "#quemsomos",
    "Metodologia": "#metodologia",
    "Ajuda": "ajuda"
}

def main(request):
    ctxt = {
        "links": links,
        "retratos": (
            ("exemplo2","Fulano","Desenvolvedor"),
            ("exemplo2","Fulano","Desenvolvedor"),
            ("exemplo","Ewerton Bramos","Desenvolvedor"),
            ("exemplo2","Fulano","Desenvolvedor"),
        )
    }
    template = loader.get_template("index.html")
    return HttpResponse(template.render(ctxt,request))

def entrar(request):
    ctxt = {
        "links": links
    }
    template = loader.get_template("entrar.html")
    return HttpResponse(template.render(ctxt,request))

def cadastrar(request):
    ctxt = {
        "links": links
    }
    template = loader.get_template("cadastrar.html")
    return HttpResponse(template.render(ctxt,request))

def ajuda(request):
    ctxt = {
        "links": links
    }
    template = loader.get_template("ajuda.html")
    return HttpResponse(template.render(ctxt,request))

def erro404(request,exception):
    ctxt = {
        "links": links,
        "erro": exception
    }
    template = loader.get_template("404.html")
    return HttpResponse(template.render(ctxt,request))
    