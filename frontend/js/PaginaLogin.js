window.onload = function () {
    document
        .getElementById("login-button")
        .addEventListener("click", function () {
        var username = document.getElementById("user");
        var password = document.getElementById("password");
        var controller = new ReviewsController();
        controller.login(username.value, password.value);
    });
};
