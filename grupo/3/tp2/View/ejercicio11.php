<?php
$title = "Cuevana 3 | Ejercicio 11";
$scripts = ["./js/peliculas.js", "./js/ejercicio11.js"];
$stylesheets = ["./css/ejercicio0.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>
<!-- Fila Informacion -->
<div class="container py-5">
  <div class="row">
    <div class="col-lg-12">
      <h1>Ciencia Ficcion</h1>
      <p>El cine de ciencia ficción es un género cinematográfico que utiliza representaciones especulativas basadas en la ciencia de fenómenos imaginarios como extraterrestres, planetas alienígenas y viajes en el tiempo, a menudo junto con elementos tecnológicos como naves espaciales futuristas, robots y otras tecnologías. El cine de ciencia ficción se ha utilizado en ocasiones para comentarios críticos de aspectos políticos o sociales, y la exploración de cuestiones filosóficas como la definición de ser humano.
        <br>
        Este tipo de cine se origina con el cine mudo, cuando el Le Voyage dans la Lune (1902) de Georges Méliès asombró a su audiencia con sus efectos fotográficos. Desde la década de 1930 hasta la de 1950, el género constía principalmente en películas de serie B de bajo presupuesto. Tras el hito de Stanley Kubrick de 2001: A Space Odyssey de 1968, el cine de ciencia ficción fue tomado más en serio. A finales de la década de 1970, películas de presupuesto alto con efectos especiales se convirtieron en populares entre la audiencia. Películas como Star Wars o Close Encounters of the Third Kind allanaron el camino de éxitos de ventas en las siguientes décadas como E. T.: El extraterrestre (1982) y Men in Black (1997).
      </p>
    </div>
  </div>
</div>
<!-- Fila Imagenes -->
<div class="container-fluid pb-5">
  <div class="row">
    <h3>Ultimas Peliculas del Género:</h3>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#venom">
          <img onclick="mostrarPelicula('venom2')" value="venom2" src="images/venom-2.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>

    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#spiderman">
          <img onclick="mostrarPelicula('spiderman')" value="spiderman" src="./images/ciencia-ficcion/spiderman.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#el-proyecto-adam">
          <img onclick="mostrarPelicula('elproyectoadam')" value="elproyectoadam" src="images/ciencia-ficcion/el-proyecto-adam.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#eternals">
          <img onclick="mostrarPelicula('eternals')" value="eternals" src="images/ciencia-ficcion/eternals.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#moonfall">
          <img onclick="mostrarPelicula('moonfall')" value="moonfall" src="images/ciencia-ficcion/moonfall.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#jurassic-island">
          <img onclick="mostrarPelicula('jurassicisland')" value="jurassicisland" src="images/ciencia-ficcion/jurassic-island.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#last-survivors">
          <img onclick="mostrarPelicula('lastsurvivors')" value="lastsurvivors" src="images/ciencia-ficcion/last-survivors.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#matrix">
          <img onclick="mostrarPelicula('matrix')" value="matrix" src="images/ciencia-ficcion/matrix.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#project-gemini">
          <img onclick="mostrarPelicula('projectgemini')" value="projectgemini" src="images/ciencia-ficcion/project-gemini.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#resident-evil">
          <img onclick="mostrarPelicula('residentevil')" value="residentevil" src="images/ciencia-ficcion/resident-evil.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#sonic-2">
          <img onclick="mostrarPelicula('sonic2')" value="sonic2" src="images/ciencia-ficcion/sonic-2.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
    <div class="col-1">
      <div class="card d-flex">
        <a href="#the-prototype">
          <img onclick="mostrarPelicula('theprototype')" value="theprototype" src="images/ciencia-ficcion/the-prototype.jpg" class="card-img-top imagen-pelicula" alt="..." />
        </a>
      </div>
    </div>
  </div>
</div>
<!-- Fila 2 Columnas, nombre imagen e imagen ampliada -->
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h4>Nombre de cada Imagen</h4>
      <ul class="list-group lista-titulo-img">
        <!-- onclick="cargarModal(580489)" -->
        <li class="list-group-item titulo-img titulo-img-activa" data-bs-toggle="modal" data-bs-target="#exampleModal" value=580489> venom-2 </li>
        <li class="list-group-item titulo-img" value=634649 data-bs-toggle="modal" data-bs-target="#exampleModal">spiderman</ li>
        <li class="list-group-item titulo-img" value=696806 data-bs-toggle="modal" data-bs-target="#exampleModal">el-proyecto-adam</li>
        <li class="list-group-item titulo-img" value=524434 data-bs-toggle="modal" data-bs-target="#exampleModal">eternals</li>
        <li class="list-group-item titulo-img" value=406759 data-bs-toggle="modal" data-bs-target="#exampleModal">moonfall</li>
        <li class="list-group-item titulo-img" value=946253 data-bs-toggle="modal" data-bs-target="#exampleModal">jurassic-island </li>
        <li class="list-group-item titulo-img" value=789171 data-bs-toggle="modal" data-bs-target="#exampleModal">last-survivors </li>
        <li class="list-group-item titulo-img" value=624860 data-bs-toggle="modal" data-bs-target="#exampleModal">matrix</li>
        <li class="list-group-item titulo-img" value=575322 data-bs-toggle="modal" data-bs-target="#exampleModal">project-gemini </li>
        <li class="list-group-item titulo-img" value=460458 data-bs-toggle="modal" data-bs-target="#exampleModal">resident-evil </li>
        <li class="list-group-item titulo-img" value=675353 data-bs-toggle="modal" data-bs-target="#exampleModal">sonic-2 </li>
        <li class="list-group-item titulo-img" value=425906 data-bs-toggle="modal" data-bs-target="#exampleModal">the-prototype </li>
      </ul>
    </div>
    <div class="col-sm-8 imagen-grande">
      <img class="img" src="./images/ciencia-ficcion/venom-2-p.jpg" id="img-grande" alt="">
    </div>

  </div>
</div>
</div>
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-8">
      <table class="table">
        <h1 class="p-1">Ultimos Estrenos</h1>
        <thead>
          <tr>
            <th>#</th>
            <th>Pelicula</th>
            <th>Año Estreno</th>
            <th>Genero</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>El Proyeto Adam</td>
            <td>2022</td>
            <td>Ciencia Ficcion</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Sonic 2</td>
            <td>2022</td>
            <td>Ciencia Ficcion</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Eternals</td>
            <td>2021</td>
            <td>Ciencia Ficcion</td>
          </tr>
          <tr>
            <th>4</th>
            <td>Matrix Resurrections</td>
            <td>2021</td>
            <td>Accion/Aventura</td>
          </tr>
          <tr>
            <th>5</th>
            <td>Venom 2</td>
            <td>2021</td>
            <td>Accion</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-4 infoPelicula">
      <h4 id="nombrePelicula">Venom 2</h4>
      <p id="sinopsisPelicula">Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady</p>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modal-title"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modal-body"></div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</div>