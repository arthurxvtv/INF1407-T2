var token = localStorage.getItem("token");
if (!token) {
    var split = window.location.href.split("/");
    var nomePagina = split[split.length - 1];
    console.log(nomePagina);
    window.location.replace(window.location.href.replace(nomePagina, "login.html"));
}
