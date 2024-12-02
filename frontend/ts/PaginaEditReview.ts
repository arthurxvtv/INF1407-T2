window.onload = function () {
  const submitEditButton = document.getElementById("submit-edit-button");

  const controller = new ReviewsController();

  const urlParams = new URLSearchParams(window.location.search);
  const reviewId = urlParams.get("id");

  if (reviewId) {
    controller.getReview(parseInt(reviewId)).then(function (review) {
      const gameNameInput = document.getElementById("game-name") as HTMLInputElement;
      const starsInput = document.getElementById("stars") as HTMLInputElement;

      gameNameInput.value = review.game_name;
      starsInput.value = review.stars.toString();
    });

    submitEditButton?.addEventListener("click", function () {
      const gameNameInput = document.getElementById("game-name") as HTMLInputElement;
      const starsInput = document.getElementById("stars") as HTMLInputElement;

      controller.updateReview(parseInt(reviewId), gameNameInput.value, parseInt(starsInput.value)).then(function () {
        window.location.replace("index.html");
      });
    });
  }
};