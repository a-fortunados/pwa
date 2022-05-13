$(document).ready(function () {
  /* API key c1bd20ede9be9360887e539a14337626 */
  $('select#generos').on('change', function (e) {
    let genero = e.currentTarget.value;
    $('#informacionPelicula').css('display', 'none');
    $.ajax({
      url: `https://api.themoviedb.org/3/discover/movie?api_key=c1bd20ede9be9360887e539a14337626&with_genres=${genero}&language=es-ES
      `,
      type: 'get',
      peliculas: { value: $(this).val() },
      success: function (peliculas) {
        let listaOptions = "<option value=''></option>";

        peliculas.results.forEach(function (pelicula) {
          let name = pelicula.title;
          let id = pelicula.id;
          listaOptions += "<option value='" + id + "'>" + name + '</option>';
        });
        $('#peliculas').html(listaOptions);
        $('#elegirPelicula').css('display', 'block');
      },
      error: function () {
        alert('Hay un error en la URL');
      },
    });
  });

  $('select#peliculas').on('change', function (e) {
    let id = e.currentTarget.value;
    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=c1bd20ede9be9360887e539a14337626&language=es-ES
      `,
      type: 'get',
      peliculas: { value: $(this).val() },
      success: function (pelicula) {
        $('#titulo').html(pelicula.title);
        $('#imagen').attr('src', `https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`);
        $('#imagen').attr('alt', `Poster ${pelicula.title}`);
        $('#descripcion').html(pelicula.overview);
        $('#informacionPelicula').css('display', 'block');
      },
      error: function () {
        alert('Hay un error en la URL');
      },
    });
  });
});
