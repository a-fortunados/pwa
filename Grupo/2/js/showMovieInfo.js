function showInfo(movie) {
  for (let i = 1; i < 13; i++) {
    document.getElementById("img-info-" + i).classList.add("d-none");
  }
  datos = document.getElementById("img-info-" + movie);
  datos.classList.remove("d-none");
  datos.classList.remove("d-none");
}