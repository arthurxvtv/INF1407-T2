interface Review {
  game_name: string;
  stars: number;
}

const url = "http://localhost:8000";

class ReviewsController {
  token(): string | null {
    return localStorage.getItem("token");
  }

  listaReviews(): Promise<Review[]> {
    return fetch(url + "/reviews/", {
      headers: {
        Authorization: "Token " + this.token() || "",
      },
    }).then((request) => request.json());
  }

  login(username: string, password: string): Promise<void> {
    return fetch(url + "/login/", {
      headers: {
        Authorization: "Token " + this.token() || "",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((request) => request.json())
      .then(function (token) {
        if (!token?.token) return;
        localStorage.setItem("token", token.token);
        window.location.replace(
          window.location.href.replace("/login.html", "/index.html"),
        );
      });
  }
}
