var url = "http://localhost:8000";
var ReviewsController = /** @class */ (function () {
    function ReviewsController() {
    }
    ReviewsController.prototype.token = function () {
        return localStorage.getItem("token");
    };
    ReviewsController.prototype.listaReviews = function () {
        return fetch(url + "/reviews/", {
            headers: {
                Authorization: "Token " + this.token() || "",
            },
        }).then(function (request) { return request.json(); });
    };
    ReviewsController.prototype.login = function (username, password) {
        return fetch(url + "/login/", {
            headers: {
                Authorization: "Token " + this.token() || "",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        })
            .then(function (request) { return request.json(); })
            .then(function (token) {
            if (!(token === null || token === void 0 ? void 0 : token.token))
                return;
            localStorage.setItem("token", token.token);
            window.location.replace(window.location.href.replace("/login.html", "/index.html"));
        });
    };
    return ReviewsController;
}());
