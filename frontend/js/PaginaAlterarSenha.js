"use strict";
window.onload = function () {
    var updatePasswordButton = document.getElementById("update-password-button");
    var errorMessage = document.getElementById("error-message");
    var controller = new ReviewsController();
    updatePasswordButton === null || updatePasswordButton === void 0 ? void 0 : updatePasswordButton.addEventListener("click", function () {
        var newPasswordInput = document.getElementById("new-password");
        var confirmNewPasswordInput = document.getElementById("confirm-new-password");
        // Limpar mensagem de erro
        errorMessage.textContent = "";
        // Verificar se todos os campos estão preenchidos
        if (!newPasswordInput.value || !confirmNewPasswordInput.value) {
            errorMessage.textContent = "Todos os campos são obrigatórios!";
            return;
        }
        // Verificar se as senhas coincidem
        if (newPasswordInput.value !== confirmNewPasswordInput.value) {
            errorMessage.textContent = "As senhas não coincidem!";
            return;
        }
        controller.updatePassword(newPasswordInput.value).then(function () {
            window.location.replace("index.html");
        }).catch(function (error) {
            errorMessage.textContent = "Erro ao alterar a senha: " + error.message;
        });
    });
};
