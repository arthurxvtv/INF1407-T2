window.onload = function () {
  const listaReviews = document.getElementById("lista-reviews");
  const logoutButton = document.getElementById("logout-button");

  const controller = new ReviewsController();

  controller.listaReviews().then(function (reviews) {
    reviews.map(function (review) {
      const el = document.createElement("li");
      el.innerHTML = `${review.game_name} - ${review.stars} ★`;
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "Deletar";
      deleteButton.addEventListener("click", function () {
        controller.deleteReview(review.id).then(function () {
          el.remove();
        });
      });
      const editButton = document.createElement("button");
      editButton.innerHTML = "Editar";
      editButton.addEventListener("click", function () {
        window.location.replace(`editReview.html?id=${review.id}`);
      });
      el.appendChild(deleteButton);
      el.appendChild(editButton);
      listaReviews?.appendChild(el);
    });
  });

  logoutButton?.addEventListener("click", function () {
    controller.logout();
  });
};