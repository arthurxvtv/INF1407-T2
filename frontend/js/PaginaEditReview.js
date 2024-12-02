"use strict";
window.onload = function () {
    var submitEditButton = document.getElementById("submit-edit-button");
    var controller = new ReviewsController();
    var urlParams = new URLSearchParams(window.location.search);
    var reviewId = urlParams.get("id");
    if (reviewId) {
        controller.getReview(parseInt(reviewId)).then(function (review) {
            var gameNameInput = document.getElementById("game-name");
            var starsInput = document.getElementById("stars");
            gameNameInput.value = review.game_name;
            starsInput.value = review.stars.toString();
        });
        submitEditButton === null || submitEditButton === void 0 ? void 0 : submitEditButton.addEventListener("click", function () {
            var gameNameInput = document.getElementById("game-name");
            var starsInput = document.getElementById("stars");
            controller.updateReview(parseInt(reviewId), gameNameInput.value, parseInt(starsInput.value)).then(function () {
                window.location.replace("index.html");
            });
        });
    }
};
