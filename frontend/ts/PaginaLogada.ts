const token = localStorage.getItem("token");

if (!token) {
  const split = window.location.href.split("/");
  const nomePagina = split[split.length - 1];
  console.log(nomePagina);
  window.location.replace(
    window.location.href.replace(nomePagina, "login.html"),
  );
}
