$(document).ready(function () {
  $.ajax({
    url: 'http://localhost/tp1y2php/View/buscarPaises.php',
    type: 'GET',
    success: function (paises) {
      let arrPaises = JSON.parse(paises);
      let listaOptions = "<option value='' disabled selected>Elegir Pais</option>";
      $(arrPaises).each(function (i) {
        listaOptions +=
          "<option value='" + arrPaises[i].id + "'>" + arrPaises[i].descripcion + '</option>';
      });
      $('#inputPais').html(listaOptions);
    },
    error: function () {
      $('.alerta').html(`<div class="alert alert-error" role="alert">
      No se pudieron cargar los comentarios.</div>`);
    },
  });

  $('select#inputPais').on('change', function () {
    $('.div-estado').removeClass('d-none');
    $(function () {
      let idPais = $('#inputPais').val();
      let availableTags = [];
      $.ajax({
        url: 'http://localhost/tp1y2php/View/buscarEstados.php',
        type: 'GET',
        success: function (estados) {
          let arrEstados = JSON.parse(estados);
          $(arrEstados).each(function (i) {
            if (arrEstados[i].idPais == idPais) {
              availableTags.push(arrEstados[i].descripcion);
            }
          });
        },
      });
      $('#inputEstado').autocomplete({
        source: availableTags,
      });
    });
  });
});
