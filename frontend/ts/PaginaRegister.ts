window.onload = function () {
  const registerButton = document.getElementById("register-button");
  const errorMessage = document.getElementById("error-message");

  const controller = new ReviewsController();

  registerButton?.addEventListener("click", function () {
    const usernameInput = document.getElementById("user") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;

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