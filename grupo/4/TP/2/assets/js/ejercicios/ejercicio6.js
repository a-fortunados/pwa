$(document).ready(function () {
  $("#enviarDatos").on("click", function () {
    let nombre = document.getElementById("nombre").value;
    let empresa = document.getElementById("empresa").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let comentarios = document.getElementById("comentarios").value;
    const datos = {
      nombre: nombre,
      empresa: empresa,
      telefono: telefono,
      mail: mail,
      comentarios: comentarios,
    };

    contacto = $.post("http://localhost/pwa/consultasBD.php", datos);
    window.location.replace("http://127.0.0.1:5500/grupo/4/TP/2/ejercicios/ejercicio5.html");
  });
});
