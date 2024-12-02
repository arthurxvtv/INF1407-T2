"use strict";
window.onload = function () {
    var registerButton = document.getElementById("register-button");
    var errorMessage = document.getElementById("error-message");
    var controller = new ReviewsController();
    registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", function () {
        var usernameInput = document.getElementById("user");
        var passwordInput = document.getElementById("password");
        var confirmPasswordInput = document.getElementById("confirm-password");
        // Limpar mensagem de erro
        errorMessage.textContent = "";
        // Verificar se todos os campos estão preenchidos
        if (!usernameInput.value || !passwordInput.value || !confirmPasswordInput.value) {
            errorMessage.textContent = "Todos os campos são obrigatórios!";
            return;
        }
        // Verificar se as senhas coincidem
        if (passwordInput.value !== confirmPasswordInput.value) {
            errorMessage.textContent = "As senhas não coincidem!";
            return;
        }
        controller.register(usernameInput.value, passwordInput.value).then(function () {
            window.location.replace("login.html");
        }).catch(function (error) {
            errorMessage.textContent = "Erro ao registrar o usuário: " + error.message;
        });
    });
};
