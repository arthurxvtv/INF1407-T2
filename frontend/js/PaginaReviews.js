window.onload = function () {
    var listaReviews = document.getElementById("lista-reviews");
    var controller = new ReviewsController();
    controller.listaReviews().then(function (reviews) {
        reviews.map(function (review) {
            var el = document.createElement("li");
            el.innerHTML = "".concat(review.game_name, " - ").concat(review.stars, " estrelas.");
            listaReviews === null || listaReviews === void 0 ? void 0 : listaReviews.appendChild(el);
        });
    });
};
