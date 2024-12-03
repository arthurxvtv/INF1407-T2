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

        user = User.objects.filter(username=username)

        if not user.exists() or not user[0].check_password(password):
            return Response({"mensagem": "Usuário não existente"}, 404)

        token = Token.objects.get_or_create(user=user[0])[0]

        return Response({"token": token.key})

class Registrar(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request, format=None):
        username = request.data.get("username")
        password = request.data.get("password")

        if User.objects.filter(username=username).exists():
            return Response({"mensagem": "Usuário já existe"}, 400)

        user = User.objects.create_user(username=username, password=password)
        token = Token.objects.create(user=user)

        return Response({"token": token.key})

class AlterarSenha(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        nova_senha = request.data.get("nova_senha")

        if not nova_senha:
            return Response({"mensagem": "Nova senha não fornecida"}, 400)

        user.set_password(nova_senha)
        user.save()

        return Response({"mensagem": "Senha alterada com sucesso"})

class Reviews(ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Review.objects.filter(user=self.request.user)

class Logout(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({"mensagem": "Logout realizado com sucesso"})