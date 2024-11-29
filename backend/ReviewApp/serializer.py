from .models import Review
from rest_framework import serializers

class ReviewSerializer(serializers.ModelSerializer):
    """Transforma o modelo em texto para ser enviado via HTTP e é responsável por pegar os dados enviados via HTTP e transformar em um modelo."""
    class Meta:
        model = Review
        exclude = []