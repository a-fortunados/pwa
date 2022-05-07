$(document).ready(function () {
  $.ajax({
    url: "http://localhost/pwa/consultasBD.php?paises=1",
    type: "GET",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#pais").on("keyup", function () {
        $("#mostrarPaises").text("");
        let paises = "<option>Seleccione</option>";
        let inputPais = document.getElementById("pais").value.toLowerCase();
        $.each(data, function (i, item) {
          if (item.descripcion.toLowerCase().includes(inputPais)) {
            paises += `<option value='${item.id}'>${item.descripcion}</option>`;
          }
        });
        console.log(paises);
        $("#mostrarPaises").append(paises);
      });
    },
    error: function muestraError(err) {
      console.log(err);
    },
  });

  $("#mostrarPaises").on("change", function () {
    console.log(document.getElementById("mostrarPaises").value);
    $.ajax({
      url: "http://localhost/pwa/consultasBD.php?estados=" + document.getElementById("mostrarPaises").value,
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        $("#pais").on("keyup", function () {
          $("#mostrarEstados").text("");
        });
        console.log(data);
        $("#mostrarEstados").text("");
        let estados;
        data.forEach((estado) => {
          estados += `<option value='${estado.id}'>${estado.descripcion}</option>`;
        });
        $("#mostrarEstados").append(estados);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });

  $("#enviarDatos").on("click", function () {
    let nombre = document.getElementById("nombre").value;
    let empresa = document.getElementById("empresa").value;
    let pais = document.getElementById("pais").value;
    let estado = document.getElementById("estado").value;
    let telefono = document.getElementById("telefono").value;
    let mail = document.getElementById("mail").value;
    let comentarios = document.getElementById("comentarios").value;

    console.log(pais);
    console.log(estado);

    const datos = {
      nombre: nombre,
      empresa: empresa,
      pais: pais,
      estado: estado,
      telefono: telefono,
      mail: mail,
      comentarios: comentarios,
    };

    if (nombre !== "" && empresa !== "" && pais !== "" && estado !== "" && telefono !== "" && mail !== "" && comentarios !== "") {
      $.ajax({
        type: "POST",
        url: "http://localhost/pwa/consultasBD.php",
        data: datos,
        success: function (r) {
          console.log(r);

          if (r.success == 1) {
            window.location.replace("http://127.0.0.1:5500/grupo/4/TP/2/ejercicios/ejercicio6b.html");
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
      $.ajax("http://localhost/pwa/consultasBD.php?contactos2=1", {
        success: function (r) {
          console.log(r);
        },
      });
    }
  });
});
