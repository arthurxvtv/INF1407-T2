"use strict";
window.onload = function () {
    var listaReviews = document.getElementById("lista-reviews");
    var logoutButton = document.getElementById("logout-button");
    var controller = new ReviewsController();
    controller.listaReviews().then(function (reviews) {
        reviews.map(function (review) {
            var el = document.createElement("li");
            el.innerHTML = "".concat(review.game_name, " - ").concat(review.stars, " estrelas.");
            listaReviews === null || listaReviews === void 0 ? void 0 : listaReviews.appendChild(el);
        });
    });
    logoutButton === null || logoutButton === void 0 ? void 0 : logoutButton.addEventListener("click", function () {
        controller.logout();
    });
};
