<?php
$title = "Cuevana 3 | Ver Comentarios";
$stylesheets = ["./css/ejercicio0.css"];
$dataTables = '"https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"';
$dataTablesBootstrap = '"https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap5.min.js"';

$scripts = ["./js/verComentarios.js", $dataTables, $dataTablesBootstrap];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
include_once "./bd/db.php";
?>

<div class="container mt-5">
  <table class="table" id="tablaComentarios">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Empresa</th>
        <th scope="col">Telefono</th>
        <th scope="col">Mail</th>
        <th scope="col">Comentario</th>
      </tr>
    </thead>
    <tbody id="comentarios">

    </tbody>
    </tbody>
  </table>

</div>