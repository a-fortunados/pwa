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

    if (nombre !== "" && empresa !== "" && telefono !== "" && mail !== "" && comentarios !== "") {
      $.ajax({
        type: "POST",
        url: "http://localhost/pwa/consultasBD.php",
        data: datos,
        success: function (r) {
          console.log(r);

          if (r.success == 1) {
            window.location.replace("http://127.0.0.1:5500/grupo/4/TP/2/ejercicios/ejercicio5.html");
          } else {
            location.reload();
            alert("Contacto repetido");
          }
        },
        error: function (r) {
          console.log(r);
        },
      });
    } else {
      $.ajax("http://localhost/pwa/consultasBD.php?contactos=1", {
        success: function (r) {
          console.log(r);
        },
      });
    }
  });
});
