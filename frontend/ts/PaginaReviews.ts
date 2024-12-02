window.onload = function () {
  const listaReviews = document.getElementById("lista-reviews");
  const logoutButton = document.getElementById("logout-button");
  const createReviewButton = document.getElementById("create-review-button");

  const controller = new ReviewsController();

  controller.listaReviews().then(function (reviews) {
    reviews.map(function (review) {
      const el = document.createElement("li");
      el.innerHTML = `${review.game_name} - ${review.stars} estrelas.`;
      listaReviews?.appendChild(el);
    });
  });

  logoutButton?.addEventListener("click", function () {
    controller.logout();
  });

  createReviewButton?.addEventListener("click", function () {
    const gameNameInput = document.getElementById("game-name") as HTMLInputElement;
    const starsInput = document.getElementById("stars") as HTMLInputElement;

    controller.createReview(gameNameInput.value, parseInt(starsInput.value)).then(function (review) {
      const el = document.createElement("li");
      el.innerHTML = `${review.game_name} - ${review.stars} estrelas.`;
      listaReviews?.appendChild(el);
    });
  });
};