$(document).ready(function () {
  // Shows corresponding select to selected option
  $("#sagaSelection").on("change", function () {
    let selectedSagaValue = $(this).val();
    $("div.saga-part-select").hide();
    $("#show" + selectedSagaValue).show();
    console.log(selectedSagaValue);
    $("#partSelection1").prop("selectedIndex", 0);
    $("#partSelection2").prop("selectedIndex", 0);
    $("#partSelection3").prop("selectedIndex", 0);
    $("#partSelection4").prop("selectedIndex", 0);
  });

  // LOTR select
  $("#partSelection1").on("change", function () {
    let selectedPartValue = $(this).val();
    console.log(selectedPartValue);
    $("#resetButton").show();
    generateMovieData(selectedPartValue);
  });

  // HP Select
  $("#partSelection3").on("change", function () {
    let selectedPartValue = $(this).val();
    console.log(selectedPartValue);
    $("#resetButton").show();
    generateMovieData(selectedPartValue);
  });

  // SW Select
  $("#partSelection4").on("change", function () {
    let selectedPartValue = $(this).val();
    console.log(selectedPartValue);
    $("#resetButton").show();
    generateMovieData(selectedPartValue);
  });

  $("#resetBtn").click(function () {
    resetSelection();
  });

  function resetSelection() {
    $("#sagaSelection").prop("selectedIndex", 0);
    $("#partSelection1").prop("selectedIndex", 0);
    $("#partSelection2").prop("selectedIndex", 0);
    $("#partSelection3").prop("selectedIndex", 0);
    $("#partSelection4").prop("selectedIndex", 0);
    $("#resetButton").hide();
    $("#selectedMovie").hide();
  }

  // Generates movie data
  function generateMovieData(partID) {
    let endpoint = "https://api.themoviedb.org/3/";
    let API_KEY = "916d2e750176a7a221a2d327cb525156";

    $("#selectedMovie").show();

    console.log("PartID: " + partID);

    $.ajax({
      type: "GET",
      url: endpoint + partID + "?api_key=" + API_KEY + "&language=es-ES",
      success: function (r) {
        console.log(r);
        let poster = r.poster_path;
        let title = r.title;
        let releaseDate = r.original_title;
        let runtime = r.runtime;
        let sinopsis = r.overview;

        if (releaseDate === undefined) {
          releaseDate = r.first_air_date;
        }

        if (runtime === undefined) {
          runtime = "TBA";
        } else {
          runtime = minutesToHours(runtime);
        }

        $("#poster img").attr("src", "https://image.tmdb.org/t/p/w342" + poster);
        $("#title").text(title);
        $("#release").text(releaseDate);
        $("#runtime").text(runtime);
        $("#genres").html(listGenres(r));
        $("#sinopsis").text(sinopsis);
      },
    });
  }

  // Lists movie genres
  function listGenres(r) {
    movieGenres = "";

    r.genres.forEach((genre) => {
      movieGenres += '<span class="badge rounded-pill bg-dark">' + genre.name + "</span>";
    });

    return movieGenres;
  }

  // Converts minutes to hours & minutes
  function minutesToHours(time) {
    var num = time;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hora(s) " + rminutes + " minuto(s).";
  }
});
