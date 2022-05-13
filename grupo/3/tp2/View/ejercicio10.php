<?php
$title = "Cuevana 3 | Ejercicio 10";
$stylesheets = ["./css/ejercicio0.css", "./css/ejercicio10.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>
<div class="container">
  <div class="row header">
    <div class="col" style="background-color:rgb(9, 255, 0); border: 2px solid;">
      <h1>Header</h1>
    </div>
  </div>

  <div class="row row-cuadrados my-3">
    <div class="col-6 col-md-3 offset-lg-3 row-celeste d-flex justify-content-center align-items-center""> <p>1 </p> </div>
                <div class=" col-6 col-md-3 d-flex row-celeste justify-content-center align-items-center"">
      <p>2 </p>
    </div>
    <div class="col-6 col-md-3 clearfix col-salto"></div>

    <div class="col-6 col-md-3  d-flex row-celeste justify-content-center align-items-center""> <p>3 </p></div>
                <div class=" col-6 col-md-3 offset-lg-6 row-celeste d-flex justify-content-center align-items-center"">
      <p>4 </p>
    </div>
  </div>

  <div class="row tablet my-3">
    <div class="col row-celeste">
      <h1 style="text-align: center;">Tablet</h1>
    </div>
  </div>

  <div class="row row-cuadrados my-3">
    <div class="order-lg-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center align-items-center " style="background-color:#aaa; border: 2px solid;">
      <p>a</p>
    </div>
    <div class="order-lg-2 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center align-items-center " style="background-color:#bbb; border: 2px solid;">
      <p>b</p>
    </div>
    <div class="order-lg-1 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center align-items-center " style="background-color:#ccc; border: 2px solid;">
      <p>c</p>
    </div>
    <div class="order-lg-0 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 d-flex justify-content-center align-items-center " style="background-color:#ddd; border: 2px solid;">
      <p>d</p>
    </div>
  </div>

  <div class="row desktop my-3">
    <div class="col row-celeste">
      <h1 style="text-align: center;">Desktop</h1>
    </div>
  </div>
  <div class="row mobile my-3">
    <div class="col row-celeste">
      <h1 style="text-align: center;">Mobile</h1>
    </div>
  </div>

  <div class="row row-cuadrados justify-content-center my-3">
    <div class="order-md-1 order-lg-0 col-xl-3 col-lg-3 col-md-6 col-sm-12 carita-triste d-flex justify-content-center align-items-center" style="background-color:rgb(187, 112, 0); border: 2px solid;">
      <h1>:(</h1>
    </div>
    <div class="order-md-0 order-lg-1 col-xl-3 col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center" style="background-color:rgb(187, 112, 0); border: 2px solid;">
      <h1>:D</h1>
    </div>
  </div>

  <div class="row footer my-3">
    <div class="col" style="background-color:rgb(9, 255, 0); border: 2px solid;">
      <h1>Footer</h1>
    </div>
  </div>
</div>