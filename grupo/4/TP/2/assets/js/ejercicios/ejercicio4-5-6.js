let d = document;

$(d).ready(function () {
  $.ajax("http://localhost/pwa/bdQuery.php?contactos=1", {
    // url: "http://127.0.0.1:5500/helpers/data/consultasBD.php?contactos=1",
    // type: "GET",
    success: function (data) {
      console.log(data);
      let contactos;
      $.each(data, function (i, item) {
        contactos += `<tr><td>${item.Nombre}</td><td>${item.Empresa}</td><td>${item.Telefono}</td><td>${item.Mail}</td><td>${item.Comentario}</td></tr>`;
      });
      $("#tableBody").append(contactos);
    },
    error: function muestraError(err) {
      console.log("CHAU");
      console.log(err);
    },
  });
});
