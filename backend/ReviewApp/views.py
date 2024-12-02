from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet

from .models import Review
from .serializer import ReviewSerializer


class Autenticar(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request, format=None):
        username = request.data.get("username")
        password = request.data.get("password")

        print(username)
        print(password)

        user = User.objects.filter(username=username)

        if not user.exists() or not user[0].check_password(password):
            return Response({"mensagem": "Usuário não existente"}, 404)

        token = Token.objects.get_or_create(user=user[0])[0]

        return Response({"token": token.key})


class Reviews(ModelViewSet):
    "Cria um endpoint para Reviews e filtra para pegar as Reviews apenas do usuário selecionado."
    serializer_class = ReviewSerializer

    # Chama o endpoint apenas para usuários logados
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(user=self.request.user)

class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({"mensagem": "Logout realizado com sucesso"})