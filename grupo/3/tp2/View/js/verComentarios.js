$(document).ready(function () {
  $.ajax({
    url: 'http://localhost/tp1y2php/View/cargarComentarios.php',
    type: 'GET',
    success: function (comentarios) {
      let arrComentarios = JSON.parse(comentarios);
      let elem = '';
      $(arrComentarios).each(function (i) {
        elem += `
        <tr>
          <td>${arrComentarios[i].Nombre}</td>
          <td>${arrComentarios[i].Empresa}</td>
          <td>${arrComentarios[i].Telefono}</td>
          <td>${arrComentarios[i].Mail}</td>
          <td>${arrComentarios[i].Comentario}</td>
        </tr>
        `;
      });
      $('#comentarios').html(elem);
      $('#tablaComentarios').DataTable({
        paging: true,
        pageLength: 5,
      });
    },
    error: function () {
      $('.alerta').html(`<div class="alert alert-error" role="alert">
      No se pudieron cargar los comentarios.</div>`);
    },
  });
});
