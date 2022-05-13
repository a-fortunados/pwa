<?php
$title = "Cuevana 3 | Cargar Contacto";
$scripts = ["./js/validaciones.js", './js/selectPais.js'];
$stylesheets = ["./css/ejercicio0.css"];
include_once "./includes/head.php";
include_once "./includes/navbar.php";
?>

<div class="container">
  <form class="col-6 mx-auto mt-5" id="form" action="#" method="POST">
    <fieldset>
      <div class="mb-3">
        <label for="inputNombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="inputNombre" name="inputNombre">
        <div id="ayudaNombre" class="form-text"></div>
      </div>

      <div class="mb-3">
        <label for="inputEmpresa" class="form-label">Empresa</label>
        <input type="text" class="form-control" id="inputEmpresa" name="inputEmpresa">
        <div id="ayudaEmpresa" class="form-text"></div>
      </div>

      <div class="mb-3">
        <label for="inputTelefono" class="form-label">Telefono</label>
        <input type="number" class="form-control" id="inputTelefono" name="inputTelefono">
        <div id="ayudaTelefono" class="form-text"></div>
      </div>

      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail" name="inputEmail">
        <div id="ayudaEmail" class="form-text"></div>
      </div>

      <div class="mb-3">
        <label for="inputPais" class="form-label">Pais</label>
        <select class="form-select" id="inputPais" name="inputPais">
          <option selected></option>
        </select>
        <div id="ayudaPais" class="form-text"></div>
      </div>

      <div class="mb-3 d-none div-estado ui-widget">
        <label for="inputEstado" class="form-label">Estado</label>
        <input type="text" class="form-control" id="inputEstado" name="inputEstado">
        <div id="ayudaEstado" class="form-text"></div>
      </div>

      <div class="mb-4">
        <label for="inputComentarios" class="form-label">Comentarios:</label>
        <textarea class="form-control" id="inputComentarios" name="inputComentarios" rows="3"></textarea>
        <div id="ayudaComentarios" class="form-text"></div>
      </div>

      <input type="submit" class="btn btn-primary" value="Enviar" id="enviarContacto" />
      <button type="button" class="btn btn-danger" id="borrarInputs">Borrar</button>
    </fieldset>

  </form>
  <div class="alerta col-6 mx-auto mt-5" role="alert"></div>
</div>