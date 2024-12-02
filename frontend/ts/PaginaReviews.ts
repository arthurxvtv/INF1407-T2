window.onload = function () {
  const listaReviews = document.getElementById("lista-reviews");
  const logoutButton = document.getElementById("logout-button");

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
};