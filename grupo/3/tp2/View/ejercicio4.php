<?php
$title = "Cuevana 3 | Ejercicio 4";
$stylesheets = ["./css/ejercicio0.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>

<div class="container mt-5">
  <div class="row">
    <p>Implemente un contenedor que tenga 3 columnas con la misma cantidad de filas para
      cualquier tipo de dispositivo usando 2 alternativas sin colapsar. (Ayuda: no usar *)</p>
    <div class="col-*" style="background-color:#aaa">
      <h1>Columna 1</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-xxl" style="background-color:#bbb">
      <h1>Columna 2</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-12" style="background-color:#ccc">
      <h1>Columna 3</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
  </div>
  <hr>
</div>

<div class="container">
  <hr>
  <div class="row">
    <p>Implemente un contenedor que tenga todas las columnas con la misma cantidad de filas para
      cualquier tipo de dispositivo, con una fila sin colapsar y otra que colapse para un tamaño fijo,
      por ejemplo para “lg”.
    </p>
    <!-- <div class="row row cols-3"> -->
    <div class="col-4" style="background-color:#aaa">
      <h1>Columna 1</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-4" style="background-color:#bbb">
      <h1>Columna 2</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-4" style="background-color:#ccc">
      <h1>Columna 3</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <!-- </div> -->
  </div>
  <div class="row">
    <div class="col-4 col-lg-5 col-xl-4" style="background-color:#aaa">
      <h1>Columna 1</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-4 col-lg-5 col-xl-4" style="background-color:#bbb">
      <h1>Columna 2</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-4 col-lg-5 col-xl-4" style="background-color:#ccc">
      <h1>Columna 3</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
  </div>
  <hr>
</div>

<div class="container">
  <div class="row">
    <p>Implemente un contenedor que tenga una columna con un ancho en unidades fijo y la columna de la izquierda o derecha o ambas sin valor</p>
    <div class="col-5" style="background-color:#aaa">
      <h1>Columna 1</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col" style="background-color:#bbb">
      <h1>Columna 2</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
  </div>
  <hr>
</div>

<div class="container">
  <div class="row">
    <p>Y si necesitamos que se repartan los espacios teniendo en cuenta la cantidad de contenido de una columna? ¿Cómo lo haríamos?</p>
    <div class="col-md-3" style="background-color:#aaa">
      <h1>Columna 1</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
    <div class="col-md-auto" style="background-color:#bbb">
      <h1>Columna 2</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam hic perspiciatis repellendus ea consectetur fugiat porro inventore repellat temporibus ex!</p>
    </div>
    <div class="col-md-3" style="background-color:#ccc">
      <h1>Columna 3</h1>
      <p>Esto es una prueba de bootstrap.</p>
    </div>
  </div>
  <hr>
</div>