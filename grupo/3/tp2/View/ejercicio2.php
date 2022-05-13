<?php
$title = "Cuevana 3 | Ejercicio 2";
$scripts = ["./js/ejercicio2.js"];
$stylesheets = ["./css/ejercicio0.css", "./css/ejercicio2.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>
<div class="container mt-5">
  <p>
    Enunciado:
    <br />
    <br />
    Ejercicio 2: Múltiples reglas a las columnas de una fila.
    <br />
    Si queremos que una página se muestre de forma diferente si la
    accedemos desde un dispositivo con pantalla muy muy grande, muy
    grande, grande, mediana, pequeña o muy pequeña podemos asignar
    múltiples reglas a cada columna.
    <br />
    Implementemos una página que muestre los datos en dos columnas y
    el ancho de las columnas dependa de la pantalla del dispositivo
    de la siguiente manera:
    <br />
  </p>
</div>
<div class="container" style="padding: 0">
  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">1er Columna</th>
        <th scope="col">2da Columna</th>
      </tr>
    </thead>
    <tbody>
      <tr class="xxl">
        <th scope="row">Pantalla muy, muy grande</th>
        <td>10 unidades</td>
        <td>2 unidades</td>
      </tr>
      <tr class="xl">
        <th scope="row">Pantalla muy grande</th>
        <td>9 unidades</td>
        <td>3 unidades</td>
      </tr>
      <tr class="lg">
        <th scope="row">Pantalla grande</th>
        <td>8 unidades</td>
        <td>4 unidades</td>
      </tr>
      <tr class="md">
        <th scope="row">Pantalla mediana</th>
        <td>7 unidades</td>
        <td>5 unidades</td>
      </tr>
      <tr class="sm">
        <th scope="row">Pantalla chica</th>
        <td>6 unidades</td>
        <td>6 unidades</td>
      </tr>
      <tr class="xs">
        <th scope="row">Pantalla muy chica</th>
        <td>5 unidades</td>
        <td>7 unidades</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="container">
  <div class="row">
    <div class="col-xxl-10 col-xl-9 col-lg-8 col-md-7 col-sm-6 col-5 border border-success">
      <p style="margin: 10px">Primer Columna</p>
    </div>
    <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-5 col-sm-6 col-7 border border-success">
      <p style="margin: 10px">Segunda Columna</p>
    </div>
  </div>
</div>