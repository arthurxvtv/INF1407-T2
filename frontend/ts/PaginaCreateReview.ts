window.onload = function () {
  const submitReviewButton = document.getElementById("submit-review-button");

  const controller = new ReviewsController();

  submitReviewButton?.addEventListener("click", function () {
    const gameNameInput = document.getElementById("game-name") as HTMLInputElement;
    const starsInput = document.getElementById("stars") as HTMLInputElement;

    controller.createReview(gameNameInput.value, parseInt(starsInput.value)).then(function () {
      window.location.replace("index.html");
    });
  });
};