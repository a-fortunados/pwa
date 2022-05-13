<?php
$title = "Cuevana 3 | Ejercicio 1 TP2P1";
$scripts = ["./js/ejercicio1tp2p1.js"];
$stylesheets = ["./css/ejercicio0.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>

<div class="container">
  <div id="elegirGenero" class="mt-5">
    <label for="generos">Elegi un genero</label>
    <select class="form-select" aria-label="Default select example" name="generos" id="generos">
      <option selected disabled></option>
      <option value="28">Accion</option>
      <option value="12">Aventura</option>
      <option value="16">Animacion</option>
      <option value="35">Comedia</option>
      <option value="878">Ciencia Ficcion</option>
      <option value="27">Horror</option>
    </select>
  </div>
  <div id="elegirPelicula" style="display: none" class="mt-2">
    <label for="peliculas">Elegi una pelicula </label>
    <select class="form-select" aria-label="Default select example" name="peliculas" id="peliculas">
      <option selected disabled></option>
    </select>
  </div>
  <div class="card w-75 mt-5 bg-transparent" id="informacionPelicula" style="display: none">
    <div class="card-body ps-0">
      <h2 id="titulo" class="card-title"></h2>
      <img src="" alt="" style="width: 800px" id="imagen" />
      <p id="descripcion" class="mt-2 card-text"></p>
    </div>
  </div>
</div>
</body>

</html>

<?php include_once "./includes/footer.php" ?>