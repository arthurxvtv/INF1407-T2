"use strict";
window.onload = function () {
    var registerButton = document.getElementById("register-button");
    var controller = new ReviewsController();
    registerButton === null || registerButton === void 0 ? void 0 : registerButton.addEventListener("click", function () {
        var usernameInput = document.getElementById("user");
        var passwordInput = document.getElementById("password");
        var confirmPasswordInput = document.getElementById("confirm-password");
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("As senhas não coincidem!");
            return;
        }
        controller.register(usernameInput.value, passwordInput.value).then(function () {
            window.location.replace("login.html");
        }).catch(function (error) {
            alert("Erro ao registrar o usuário: " + error.message);
        });
    });
};
