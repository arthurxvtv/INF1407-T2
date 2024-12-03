window.onload = function () {
  const updatePasswordButton = document.getElementById("update-password-button");
  const errorMessage = document.getElementById("error-message");

  const controller = new ReviewsController();

  updatePasswordButton?.addEventListener("click", function () {
    const newPasswordInput = document.getElementById("new-password") as HTMLInputElement;
    const confirmNewPasswordInput = document.getElementById("confirm-new-password") as HTMLInputElement;

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