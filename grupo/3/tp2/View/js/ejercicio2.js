$(document).ready(function () {
  /* API key c1bd20ede9be9360887e539a14337626 */
  $('#tab-movie-container').ready(function () {
    let genero = 53;
    $('#tab-movie-container').css('display', 'none');
    setTimeout(() => {
      $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=c1bd20ede9be9360887e539a14337626&language=es-ES
      `,
        type: 'get',
        peliculas: { value: $(this).val() },
        success: function (peliculas) {
          let col = "<div class=''></div>";
          peliculas.results.forEach(function (pelicula) {
            let name = pelicula.title;
            let id = pelicula.id;
            col += `
            <div class="card d-flex col-2"> 
              <img src="https://image.tmdb.org/t/p/original${pelicula.poster_path}" class="card-img-top" alt="Poster ${name}"/> 
              <div class="card-body"> 
                <h5 class="card-title">${name}</h5> 
                <a href="#" class="btn btn-primary"> Ver Pelicula </a> 
              </div> 
            </div>`;
          });
          $('#tab-movie-container').html(col);
        },
        error: function () {
          alert('Hay un error en la URL');
        },
      });
    }, 1500);
  });

  $('#tab-movie-details').ready(function () {
    let genero = 878;
    $('#tab-movie-details').css('display', 'none');
    setTimeout(() => {
      $.ajax({
        url: `https://api.themoviedb.org/3/discover/movie?api_key=c1bd20ede9be9360887e539a14337626&with_genres=${genero}&language=es-ES
      `,
        type: 'get',
        peliculas: { value: $(this).val() },
        success: function (peliculas) {
          let col = "<div class=''></div>";
          peliculas.results.forEach(function (pelicula) {
            let name = pelicula.title;
            let id = pelicula.id;
            let descripcion = pelicula.overview;
            col += `
          <div id="pelicula" class="col-xl-5 col-12 d-flex ">
            <img src="https://image.tmdb.org/t/p/original${pelicula.poster_path}" alt="Poster ${name}">
            <div class="d-flex flex-column align-content-center justify-content-center ms-3">
              <h5 class="card-title">${name}</h5>
              <p class="card-text pe-2">${descripcion}</p>
              <a href="#" class="btn btn-primary"
                >Ver Pelicula</a
              >
            </div>
          </div>`;
          });
          $('#tab-movie-details').html(col);
        },
        error: function () {
          alert('Hay un error en la URL');
        },
      });
    }, 1500);
  });
});
