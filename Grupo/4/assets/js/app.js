seleccionarImagen();

function seleccionarImagen(rutaImg) {
  switch (rutaImg) {
    case "../assets/img/HP/philosophers-stone-theatrical-poster.jpg":
      var sel = document.getElementById("img1");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/HP/chamber-of-secrets-theatrical-poster-1050x0-c-default.jpg":
      var sel = document.getElementById("img2");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/HP/prisoner-of-azkaban-theatrical-poster.jpg":
      var sel = document.getElementById("img3");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/LOTR/LOTR_TFR.jpg":
      var sel = document.getElementById("img4");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/LOTR/LOTR_TTT.jpg":
      var sel = document.getElementById("img5");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/LOTR/LOTR_TRK.jpg":
      var sel = document.getElementById("img6");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/SW/SW_E1.jpg":
      var sel = document.getElementById("img7");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/SW/SW_E2.jpg":
      var sel = document.getElementById("img8");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/SW/SW_E3.jpg":
      var sel = document.getElementById("img9");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/HP/FB_TSD.jpg":
      var sel = document.getElementById("img10");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/LOTR/LOTR_TRP.jpg":
      var sel = document.getElementById("img11");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
    case "../assets/img/SW/SW_OWK.jpg":
      var sel = document.getElementById("img12");
      var contexto = metodoReutilizable();
      contexto.textContent = "Aquí podemos apreciar una tabla con el ranking de 6 películas nuestras con mayor recaudación ordenadas de mayor a menor";
      break;
  }

  function metodoReutilizable() {
    desmarcar();
    //Cambia la clase de las tabs para activarlas
    sel.setAttribute("class", "list-group-item list-group-item-action active");
    //Muestra la imagen maximizada
    var imagen = document.getElementById("filmSeriesImg");
    imagen.setAttribute("src", rutaImg);
    //Selecciona el elemento donde se va a imprimir el contexto o explicacion de la imagen a mostrar
    var contexto = document.getElementById("contexto");
    return contexto;
  }

  function desmarcar() {
    var arrayElementos = document.getElementsByClassName("list-group-item list-group-item-action active");
    for (let i = 0; i < arrayElementos.length; i++) {
      arrayElementos[i].setAttribute("class", "list-group-item list-group-item-action");
    }
  }
}
