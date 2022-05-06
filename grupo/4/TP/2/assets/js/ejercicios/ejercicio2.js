$(document).ready(function () {
  $("#streaming-tab").click(function () {
    hideTVTrending();
    hideCinesTrending();
    showStreamingTrending();
    var content = "streaming/week";
    generateTrendingStreamingData(content);
  });

  $("#tv-tab").click(function () {
    hideStreamingTrending();
    hideCinesTrending();
    showTVTrending();
    var content = "tv/week";
    generateTrendingStreamingData(content);
  });

  $("#cines-tab").click(function () {
    hideStreamingTrending();
    hideTVTrending();
    showCinesTrending();
    var content = "movie/week";
    generateTrendingStreamingData(content);
  });

  // Makes visible every #streamingTrending
  function showStreamingTrending() {
    $("#streamingTrending1").show();
    $("#streamingTrending2").show();
    $("#streamingTrending3").show();
    $("#streamingTrending4").show();
    $("#streamingTrending5").show();
  }

  // Makes invisible every #streamingTrending
  function hideStreamingTrending() {
    $("#streamingTrending1").hide();
    $("#streamingTrending2").hide();
    $("#streamingTrending3").hide();
    $("#streamingTrending4").hide();
    $("#streamingTrending5").hide();
  }

  // Makes visible every #tvTrending
  function showTVTrending() {
    $("#tvTrending1").show();
    $("#tvTrending2").show();
    $("#tvTrending3").show();
    $("#tvTrending4").show();
    $("#tvTrending5").show();
  }

  // Makes invisible every #tvTrending
  function hideTVTrending() {
    $("#tvTrending1").hide();
    $("#tvTrending2").hide();
    $("#tvTrending3").hide();
    $("#tvTrending4").hide();
    $("#tvTrending5").hide();
  }

  // Makes visible every #cinesTrending
  function showCinesTrending() {
    $("#cinesTrending1").show();
    $("#cinesTrending2").show();
    $("#cinesTrending3").show();
    $("#cinesTrending4").show();
    $("#cinesTrending5").show();
  }

  // Makes invisible every #cinesTrending
  function hideCinesTrending() {
    $("#cinesTrending1").hide();
    $("#cinesTrending2").hide();
    $("#cinesTrending3").hide();
    $("#cinesTrending4").hide();
    $("#cinesTrending5").hide();
  }

  // Generates movie data
  function generateTrendingStreamingData(content) {
    let endpoint = "https://api.themoviedb.org/3/trending/";
    let API_KEY = "916d2e750176a7a221a2d327cb525156";

    $.ajax({
      type: "GET",
      url: endpoint + content + "?api_key=" + API_KEY + "&language=es-ES",
      success: function (r) {
        console.log(r);

        if (content === "streaming/week") {
          for (let index = 0; index < 10; index++) {
            let streamingObj = r.results[index];
            let poster = streamingObj.poster_path;
            let title = streamingObj.original_title;
            let releaseDate = streamingObj.release_date;
            let overview = streamingObj.overview;

            if (title == undefined) {
              title = streamingObj.original_name;
            }

            if (releaseDate == undefined) {
              releaseDate = streamingObj.first_air_date;
            }

            $("#streamingPoster" + index + " img").attr("src", "https://image.tmdb.org/t/p/w342" + poster);
            $("#streamingTitle" + index).text(title);
            $("#streamingRelease" + index).text(releaseDate);
            $("#streamingOverview" + index).text(overview);
          }
        } else if (content === "tv/week") {
          for (let index = 0; index < 10; index++) {
            let streamingObj = r.results[index];
            let poster = streamingObj.poster_path;
            let title = streamingObj.orginal_name;
            let releaseDate = streamingObj.first_air_date;
            let overview = streamingObj.overview;

            if (title == undefined) {
              title = streamingObj.original_name;
            }

            if (releaseDate == undefined) {
              releaseDate = streamingObj.first_air_date;
            }

            $("#tvPoster" + index + " img").attr("src", "https://image.tmdb.org/t/p/w342" + poster);
            $("#tvTitle" + index).text(title);
            $("#tvRelease" + index).text(releaseDate);
            $("#tvOverview" + index).text(overview);
          }
        } else if (content === "movie/week") {
          for (let index = 0; index < 10; index++) {
            let streamingObj = r.results[index];
            let poster = streamingObj.poster_path;
            let title = streamingObj.original_title;
            let releaseDate = streamingObj.release_date;
            let overview = streamingObj.overview;

            if (title == undefined) {
              title = streamingObj.original_name;
            }

            if (releaseDate == undefined) {
              releaseDate = streamingObj.first_air_date;
            }

            $("#cinesPoster" + index + " img").attr("src", "https://image.tmdb.org/t/p/w342" + poster);
            $("#cinesTitle" + index).text(title);
            $("#cinesRelease" + index).text(releaseDate);
            $("#cinesOverview" + index).text(overview);
          }
        }
      },
    });
  }
});
