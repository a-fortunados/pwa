<?php
include_once "./bd/db.php";

$comentarios = [];
$res = mysqli_query($mysqli, "SELECT * FROM estados");

$data = [];
while ($row = mysqli_fetch_assoc($res)) {
  $data[] = $row;
}

echo json_encode($data);
