<?php
//USAR ESTE ARCHIVO DENTRO DE XAMPP
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$conexionBD = new mysqli('localhost', 'root', '', 'pwa');

if (isset($_GET['contactos'])) {
    $sqlContactos = mysqli_query($conexionBD, "SELECT * FROM contactos ");
    if (mysqli_num_rows($sqlContactos) > 0) {
        $contactos = mysqli_fetch_all($sqlContactos, MYSQLI_ASSOC);
        echo json_encode($contactos);
    }
} else if (isset($_GET['paises'])) {
    $sqlPaises = mysqli_query($conexionBD, "SELECT * FROM paises ");
    if (mysqli_num_rows($sqlPaises) > 0) {
        $paises = mysqli_fetch_all($sqlPaises, MYSQLI_ASSOC);
        echo json_encode($paises);
    }
} else if (isset($_GET['estados'])) {
    $sqlEstados = mysqli_query($conexionBD, "SELECT * FROM estados WHERE idPais = {$_GET['estados']}");
    if (mysqli_num_rows($sqlEstados) > 0) {
        $estados = mysqli_fetch_all($sqlEstados, MYSQLI_ASSOC);
        echo json_encode($estados);
    }
} else {
    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];
    $telefono = $_POST['telefono'];
    $empresa = $_POST['empresa'];
    $comentarios = $_POST['comentarios'];
    if (($mail != "") && ($nombre != "")) {
        $sqlContactos = mysqli_query($conexionBD, "SELECT * FROM contactos WHERE Mail = '$mail'");

        $contactos = mysqli_fetch_all($sqlContactos, MYSQLI_ASSOC);

        if (count($contactos) == 0) {
            $sqlEmpleaados = mysqli_query($conexionBD, "INSERT INTO contactos(Nombre, Empresa, Telefono, Mail, Comentario) VALUES('$nombre', '$empresa', '$telefono', '$mail', '$comentarios') ");
            echo json_encode(["success" => 1]);
        } else {
            echo json_encode(["error" => 1]);
        }
    }
    exit();
}
