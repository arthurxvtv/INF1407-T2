"use strict";
window.onload = function () {
    var listaReviews = document.getElementById("lista-reviews");
    var logoutButton = document.getElementById("logout-button");
    var createReviewButton = document.getElementById("create-review-button");
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
    createReviewButton === null || createReviewButton === void 0 ? void 0 : createReviewButton.addEventListener("click", function () {
        var gameNameInput = document.getElementById("game-name");
        var starsInput = document.getElementById("stars");
        controller.createReview(gameNameInput.value, parseInt(starsInput.value)).then(function (review) {
            var el = document.createElement("li");
            el.innerHTML = "".concat(review.game_name, " - ").concat(review.stars, " estrelas.");
            listaReviews === null || listaReviews === void 0 ? void 0 : listaReviews.appendChild(el);
        });
    });
};
