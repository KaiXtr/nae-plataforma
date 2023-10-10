from django.db import models
import datetime

class Usuarios(models.Model):
    nome = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    nascimento = models.DateField(default=datetime.date.today())
    senha = models.CharField(max_length=20)

    def __str__(self) -> str:
        return f"{self.nome}"
