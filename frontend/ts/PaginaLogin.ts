window.onload = function () {
  document
    .getElementById("login-button")
    .addEventListener("click", function () {
      const username: HTMLInputElement = document.getElementById(
        "user",
      ) as HTMLInputElement;
      const password: HTMLInputElement = document.getElementById(
        "password",
      ) as HTMLInputElement;

      const controller = new ReviewsController();

      controller.login(username.value, password.value);
    });
};
