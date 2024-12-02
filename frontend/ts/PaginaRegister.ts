window.onload = function () {
  const registerButton = document.getElementById("register-button");

  const controller = new ReviewsController();

  registerButton?.addEventListener("click", function () {
    const usernameInput = document.getElementById("user") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;

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