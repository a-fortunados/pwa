<?php
include_once "./bd/db.php";

/* VERIFICAR INFO */
insert();

function insert()
{
  global $mysqli;

  $nombre = $_POST["nombre"];
  $empresa = $_POST["empresa"];
  $telefono = $_POST["telefono"];
  $mail = $_POST["mail"];
  $comentarios = $_POST["comentario"];

  $sql =  "INSERT INTO contactos (Nombre, Empresa, Telefono, Mail, Comentario) VALUES ('$nombre', '$empresa', '$telefono', '$mail', '$comentarios')";
  mysqli_query($mysqli, $sql);
}


/* $sql = "INSERT INTO `contactos` (`Nombre`, `Empresa`, `Telefono`, `Email`, `Comentario`) VALUES (; */
