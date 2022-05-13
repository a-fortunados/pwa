$(document).ready(function () {
  $('.titulo-img').each(function () {
    $(this).on('click', (e) => {
      // console.log(e.target);
      let idPelicula = e.target.value;
      let elemPelicula = e.target;
      $('.titulo-img').removeClass('titulo-img-activa');
      $(elemPelicula).addClass('titulo-img-activa');
      $.ajax({
        url: `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=c1bd20ede9be9360887e539a14337626&language=es-ES`,
        type: 'get',
        success: function (pelicula) {
          $('#modal-title').html(pelicula.title);
          if (pelicula.overview != '') {
            $('#modal-body').html(pelicula.overview);
          } else {
            $('#modal-body').html('No hay descripcion en español de esta película');
          }
          $('#img-grande').attr(
            'src',
            `https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`
          );
        },
        error: function () {
          alert('Error en la URL');
        },
      });
    });
  });
});
