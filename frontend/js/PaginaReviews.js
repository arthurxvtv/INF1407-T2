"use strict";
window.onload = function () {
    var listaReviews = document.getElementById("lista-reviews");
    var logoutButton = document.getElementById("logout-button");
    var controller = new ReviewsController();
    controller.listaReviews().then(function (reviews) {
        reviews.map(function (review) {
            var el = document.createElement("li");
            el.innerHTML = "".concat(review.game_name, " - ").concat(review.stars, " \u2605");
            var deleteButton = document.createElement("button");
            deleteButton.innerHTML = "Deletar";
            deleteButton.addEventListener("click", function () {
                controller.deleteReview(review.id).then(function () {
                    el.remove();
                });
            });
            var editButton = document.createElement("button");
            editButton.innerHTML = "Editar";
            editButton.addEventListener("click", function () {
                window.location.replace("editReview.html?id=".concat(review.id));
            });
            el.appendChild(deleteButton);
            el.appendChild(editButton);
            listaReviews === null || listaReviews === void 0 ? void 0 : listaReviews.appendChild(el);
        });
    });
    logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener("click", function () {
        controller.logout();
    });
};
