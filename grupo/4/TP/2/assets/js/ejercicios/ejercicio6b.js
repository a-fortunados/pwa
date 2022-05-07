$(document).ready(function () {
  $.ajax("http://localhost/pwa/consultasBD.php?contactos2=1", {
    success: function (data) {
      console.log(data);
      let contactos;
      $.each(data, function (i, item) {
        contactos += `<tr><td>${item.Nombre}</td><td>${item.Empresa}</td><td>${item.Pais}</td><td>${item.Estado}</td><td>${item.Telefono}</td><td>${item.Mail}</td><td>${item.Comentario}</td></tr>`;
      });
      $("#tableBody").append(contactos);
    },
    error: function muestraError(err) {
      console.log(err);
    },
  });
});
