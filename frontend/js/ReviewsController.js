"use strict";
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
    ReviewsController.prototype.logout = function () {
        fetch(url + "/logout/", {
            headers: {
                Authorization: "Token " + this.token() || "",
            },
            method: "POST",
        }).then(function () {
            localStorage.removeItem("token");
            window.location.replace("login.html");
        });
    };
    ReviewsController.prototype.createReview = function (game_name, stars) {
        return fetch(url + "/reviews/", {
            headers: {
                Authorization: "Token " + this.token() || "",
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                game_name: game_name,
                stars: stars,
            }),
        }).then(function (request) { return request.json(); });
    };
    ReviewsController.prototype.deleteReview = function (id) {
        return fetch(url + "/reviews/".concat(id, "/"), {
            headers: {
                Authorization: "Token " + this.token() || "",
            },
            method: "DELETE",
        }).then(function (request) {
            if (!request.ok) {
                throw new Error("Erro ao deletar a review");
            }
        });
    };
    ReviewsController.prototype.getReview = function (id) {
        return fetch(url + "/reviews/".concat(id, "/"), {
            headers: {
                Authorization: "Token " + this.token() || "",
            },
        }).then(function (request) { return request.json(); });
    };
    ReviewsController.prototype.updateReview = function (id, game_name, stars) {
        return fetch(url + "/reviews/".concat(id, "/"), {
            headers: {
                Authorization: "Token " + this.token() || "",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body: JSON.stringify({
                game_name: game_name,
                stars: stars,
            }),
        }).then(function (request) { return request.json(); });
    };
    ReviewsController.prototype.register = function (username, password) {
        return fetch(url + "/register/", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        }).then(function (request) {
            if (!request.ok) {
                throw new Error("Erro ao registrar o usuário");
            }
        });
    };
    return ReviewsController;
}());
