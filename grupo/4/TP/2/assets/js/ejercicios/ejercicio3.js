const arrayPosters = [
  { imgID: "hp1", apiID: "movie/671", itemID: "item1" },
  { imgID: "hp2", apiID: "movie/672", itemID: "item2" },
  { imgID: "hp3", apiID: "movie/673", itemID: "item3" },
  { imgID: "hp4", apiID: "movie/338953", itemID: "item4" },
  { imgID: "lotr1", apiID: "movie/120", itemID: "item5" },
  { imgID: "lotr2", apiID: "movie/121", itemID: "item6" },
  { imgID: "lotr3", apiID: "movie/122", itemID: "item7" },
  { imgID: "lotr4", apiID: "tv/84773", itemID: "item8" },
  { imgID: "sw1", apiID: "movie/1893", itemID: "item9" },
  { imgID: "sw2", apiID: "movie/1894", itemID: "item10" },
  { imgID: "sw3", apiID: "movie/1895", itemID: "item11" },
  { imgID: "sw4", apiID: "tv/92830", itemID: "item12" },
];

const endpoint = "https://api.themoviedb.org/3/";
const API_KEY = "916d2e750176a7a221a2d327cb525156";

function loadPosters() {
  for (let i = 0; i < arrayPosters.length; i++) {
    let apiID = arrayPosters[i].apiID;
    let posterImgID = arrayPosters[i].imgID;

    $.ajax({
      type: "GET",
      url: endpoint + apiID + "?api_key=" + API_KEY,
      success: function (r) {
        let posterPath = r.poster_path;

        document.getElementById(posterImgID).src = "https://image.tmdb.org/t/p/w342" + posterPath;
      },
    });
  }
}

$(document).ready(function () {
  $("#hp1").click(function () {
    const itemID = arrayPosters[0].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#hp2").click(function () {
    const itemID = arrayPosters[1].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#hp3").click(function () {
    const itemID = arrayPosters[2].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#hp4").click(function () {
    const itemID = arrayPosters[3].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#lotr1").click(function () {
    const itemID = arrayPosters[4].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#lotr2").click(function () {
    const itemID = arrayPosters[5].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#lotr3").click(function () {
    const itemID = arrayPosters[6].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#lotr4").click(function () {
    const itemID = arrayPosters[7].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#sw1").click(function () {
    const itemID = arrayPosters[8].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#sw2").click(function () {
    const itemID = arrayPosters[9].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#sw3").click(function () {
    const itemID = arrayPosters[10].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  $("#sw4").click(function () {
    const itemID = arrayPosters[11].itemID;
    removeActiveClass(itemID);
    addActiveClass(itemID);
    showMaxedImage(itemID);
  });

  function removeActiveClass(itemID) {
    for (let i = 0; i < arrayPosters.length; i++) {
      if (itemID !== arrayPosters[i].itemID) {
        if ($("#" + arrayPosters[i].imgID).hasClass("active")) {
          $("#" + arrayPosters[i].imgID).removeClass("active");
        }

        if ($("#" + arrayPosters[i].itemID).hasClass("active")) {
          $("#" + arrayPosters[i].itemID).removeClass("active");
        }
      }
    }
  }

  function addActiveClass(itemID) {
    for (let i = 0; i < arrayPosters.length; i++) {
      if (itemID === arrayPosters[i].itemID) {
        $("#" + arrayPosters[i].imgID).addClass("active");
        $("#" + itemID).addClass("active");
      }
    }
  }

  function showMaxedImage(itemID) {
    for (let i = 0; i < arrayPosters.length; i++) {
      if (itemID === arrayPosters[i].itemID) {
        const apiID = arrayPosters[i].apiID;
        $.ajax({
          type: "GET",
          url: endpoint + apiID + "?api_key=" + API_KEY,
          success: function (r) {
            console.log(r);
            let posterPath = r.poster_path;

            $("#posterMaxed").attr("src", "https://image.tmdb.org/t/p/w342" + posterPath);

            $("#posterMaxed").show();
            if (apiID === "tv/84773" || apiID === "tv/92830") {
              $("#serieModal").show();
            } else {
              $("#movieModal").show();
            }
          },
        });
      }
    }
  }

  $("#movieModalBtn").click(function () {
    for (let i = 0; i < arrayPosters.length; i++) {
      if ($("#" + arrayPosters[i].imgID).hasClass("active")) {
        itemID = arrayPosters[i].itemID;
      }
    }
    generateMovieData(itemID);
  });

  $("#serieModalBtn").click(function () {
    for (let i = 0; i < arrayPosters.length; i++) {
      if ($("#" + arrayPosters[i].imgID).hasClass("active")) {
        itemID = arrayPosters[i].itemID;
      }
    }
    generateSerieData(itemID);
  });

  // Generates movie data
  function generateMovieData(itemID) {
    for (let i = 0; i < arrayPosters.length; i++) {
      if (itemID === arrayPosters[i].itemID) {
        $.ajax({
          type: "GET",
          url: endpoint + arrayPosters[i].apiID + "?api_key=" + API_KEY + "&language=es-ES",
          success: function (r) {
            console.log(r);
            let title = r.title;
            let sinopsis = r.overview;

            $("#movieTitle").text(title);
            $("#movieOverview").text(sinopsis);
            $("#movieGenres").html(listGenres(r));
          },
        });

        $("#serieModal").hide();
        $("#movieModal").show();
      }
    }
  }

  // Generates serie data
  function generateSerieData(itemID) {
    $.ajax({
      type: "GET",
      url: endpoint + partID + "?api_key=" + API_KEY + "&language=es-ES",
      success: function (r) {
        console.log(r);
        let title = r.title;
        let sinopsis = r.overview;

        $("#serieTitle").text(title);
        $("#serieOverview").text(sinopsis);
        $("#serieGenres").html(listGenres(r));
      },
    });

    $("#movieModal").hide();
    $("#serieModal").show();
  }

  // Lists movie genres
  function listGenres(r) {
    contentGenres = "";

    r.genres.forEach((genre) => {
      contentGenres += '<span class="badge rounded-pill bg-dark">' + genre.name + "</span>";
    });

    return contentGenres;
  }
});
