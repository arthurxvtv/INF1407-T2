"use strict";
window.onload = function () {
    var submitReviewButton = document.getElementById("submit-review-button");
    var controller = new ReviewsController();
    submitReviewButton === null || submitReviewButton === void 0 ? void 0 : submitReviewButton.addEventListener("click", function () {
        var gameNameInput = document.getElementById("game-name");
        var starsInput = document.getElementById("stars");
        controller.createReview(gameNameInput.value, parseInt(starsInput.value)).then(function () {
            window.location.replace("index.html");
        });
    });
};
