<?php
$title = "Cuevana 3 | Home";
$scripts = ["./js/ejercicio2.js"];
$stylesheets = ["./css/ejercicio0.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";

?>

<!-- Encabezado/header/hero -->
<div id="hero" class="">
  <div class="container">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./images/spiderman-car.jpg" class="d-block" alt="Spiderman" />
          <h3 class="nombre-pelicula">Spiderman: No Way Home</h3>
          <p class="descripcion">
            Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del
            joven se vuelve una locura. Peter decide pedirle ayuda al Doctor Extraño para
            recuperar su vida. Pero algo sale mal y provoca una fractura en el multiverso.
          </p>
          <a href="#" class="btn btn-primary ver-pelicula">Ver Pelicula</a>
        </div>
        <div class="carousel-item">
          <img src="./images/moonfall-car.jpg" class="d-block" alt="Moonfall" />
          <h3 class="nombre-pelicula">Moonfall</h3>
          <p class="descripcion">
            El mundo se enfrenta a la posibilidad de la extinción porque una fuerza desconocida
            empuja a la luna de su órbita rumbo a la Tierra. Un equipo de astronautas asume la
            misión de evitar el apocalipsis.
          </p>
          <a href="#" class="btn btn-primary ver-pelicula">Ver Pelicula</a>
        </div>
        <div class="carousel-item">
          <img src="./images/muerte-en-el-nilo-car.jpg" class="d-block" alt="Muerte en el Nilo" />
          <h3 class="nombre-pelicula">Muerte en el nilo</h3>
          <p class="descripcion">
            El detective Hercule Poirot investiga el asesinato de una rica y joven heredera a
            bordo del mismo crucero por el río Nilo en el que pasa las vacaciones Poirot.
          </p>
          <a href="#" class="btn btn-primary ver-pelicula">Ver Pelicula</a>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
<!-- Main -->
<main id="main">
  <div class="container">
    <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#ultimos-estrenos" type="button" role="tab" aria-controls="home" aria-selected="true">
          Ultimos Estrenos
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link ciencia-ficcion" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
          Peliculas de Ciencia Ficcion
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="ultimos-estrenos" role="tabpanel" aria-labelledby="home-tab">
        <div id="tab-movie-container" class="row d-flex justify-content-center">
          <div class="loading">
            <img src="./images/loading.gif" alt="Loading..." />
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="row d-flex justify-content-around">
          <div id="tab-movie-details" class="row d-flex justify-content-center">
            <div class="loading">
              <img src="./images/loading.gif" alt="Loading..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container"></div>
</main>

<?php include_once "./includes/footer.php" ?>