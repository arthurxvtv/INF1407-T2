from .models import Review
from rest_framework import serializers


class ReviewSerializer(serializers.ModelSerializer):
    """Transforma o modelo em texto para ser enviado via HTTP e é responsável por pegar os dados enviados via HTTP e transformar em um modelo."""
    def create(self, validated_data):
        """Cria um novo objeto do modelo Review."""
        validated_data["user"] = self.context["request"].user
        return Review.objects.create(**validated_data)

    class Meta:
        model = Review
        exclude = ["user"]