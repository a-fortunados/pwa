let peliculas = {
  venom2: {
    nombrePelicula: "Venom 2",
    src: "./images/ciencia-ficcion/venom-2-p.jpg",
    sinopsis: "Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady",
  },
  dmz: {
    nombrePelicula: "DMZ",
    src: "./images/ciencia-ficcion/dmz-p.jpg",
    sinopsis: "DMZ es una serie de ciencia ficción que se ambienta en un futuro cercano cuando Estados Unidos se ve envuelto en una guerra civil dejando a Manhattan como una zona desmilitarizada (DMZ), destruida y aislada del resto del mundo.",
  },
  elproyectoadam: {
    nombrePelicula: "El Proyecto Adam",
    src: "./images/ciencia-ficcion/el-proyecto-adam-p.jpg",
    sinopsis: "Adam Reed, un viajero del tiempo y piloto de combate, aterriza en el año 2022. Allí, se encuentra con su yo de doce años y, junto a él, tratará de salvar el futuro.",
  },
  eternals: {
    nombrePelicula: "Eternals",
    src: "./images/ciencia-ficcion/eternals-p.jpeg",
    sinopsis: "Los Eternos son una raza de seres inmortales con poderes sobrehumanos que han vivido en secreto en la Tierra durante miles de años. Aunque nunca han intervenido en el destino de la población, ahora una amenaza se cierne sobre la humanidad.",
  },
  halo: {
    nombrePelicula: "Halo",
    src: "./images/ciencia-ficcion/halo-p.jpg",
    sinopsis: "'Halo' es una de las franquicias más populares del mundo de los videojuegos. La historia principal se centra en un conflicto interestelar entre los humanos y unos alienígenas guiados por unos profetas obsesionados con una antigua especie conocida como los Forerunners.",
  },
  jurassicisland: {
    nombrePelicula: "Jurassic Island",
    src: "./images/ciencia-ficcion/jurassic-island-p.png",
    sinopsis: "Ava descubre el paradero de su padre desaparecido en una isla desconocida; un mítico mundo perdido descubierto ante ellos por su abuelo. Junto a un grupo de aventureros y científicos, llegan a Jurassic Island, donde queda claro que el equipo anterior se había topado con un desastre. Los dinosaurios y las sanguijuelas tóxicas significan que ya no es una búsqueda de su padre, sino una batalla por la supervivencia.",
  },
  lastsurvivors: {
    nombrePelicula: "Last Survivors",
    src: "./images/ciencia-ficcion/last-survivors-p.jpg",
    sinopsis: "Un hombre intenta criar a su hijo en el salvajismo de un mundo postapocalíptico. Sin embargo, el joven desafía a su padre y comienza una relación con una misteriosa mujer.",
  },
  matrix: {
    nombrePelicula: "Matrix",
    src: "./images/ciencia-ficcion/matrix-p.jpg",
    sinopsis: "Thomas Anderson lleva una vida cómoda como una eminencia dentro del mundo de los videojuegos, pero tiene problemas para discernir entre lo que es realidad y lo que no lo es. Thomas deberá decidir si sigue al conejo blanco una vez más.",
  },
  projectgemini: {
    nombrePelicula: "Project Gemini",
    src: "./images/ciencia-ficcion/project-gemini-p.jpg",
    sinopsis: "Una misión espacial es enviada para terraformar un planeta distante. Sin embargo, la misión se encuentra con algo desconocido que tiene su propio plan para el planeta.",
  },
  residentevil: {
    nombrePelicula: "Resident Evil",
    src: "./images/ciencia-ficcion/resident-evil-p.jpg",
    sinopsis: "Los supervivientes intentan descubrir la verdad detrás de la malvada Umbrella Corporation. Mientras, luchan contra zombis sedientos de sangre en los páramos de Raccoon City.",
  },
  sonic2: {
    nombrePelicula: "Sonic 2",
    src: "./images/ciencia-ficcion/sonic-2-p.jpg",
    sinopsis: "Después de establecerse en Green Hills, Sonic quiere demostrar que tiene madera de héroe. La prueba de fuego llega con el retorno del malvado Robotnik, y su nuevo compinche, Knuckles, en busca de una esmeralda que destruye civilizaciones. Sonic forma equipo con su propio compañero de fatigas, Tails, y juntos se lanzan a una aventura que les llevará por todo el mundo en busca de la preciada piedra para evitar que caiga en manos equivocadas.",
  },
  theprototype: {
    nombrePelicula: "The Prototype",
    src: "./images/ciencia-ficcion/the-prototype-p.jpg",
    sinopsis: "Un humanoide robotizado consigue escapar del control de sus creadores, el gobierno de Estados Unidos. Comenzará entonces una difícil misión en la que tratarán de capturarlo, aunque será difícil ya que el robot ha sido precisamente especializado en ese tipo de situaciones.",
  },
};

let imagenGrande = document.getElementById('img-grande');
let sinopsis = document.getElementById('sinopsisPelicula');
let nombre = document.getElementById('nombrePelicula');

const mostrarPelicula = (nombrePelicula) => {

  if(nombrePelicula == 'venom2') {
    imagenGrande.setAttribute('src', peliculas.venom2.src);
    nombre.textContent = peliculas.venom2.nombrePelicula;
    sinopsis.textContent = peliculas.venom2.sinopsis;
  }
  else if(nombrePelicula == 'dmz') {
    imagenGrande.setAttribute('src', peliculas.dmz.src);
    nombre.textContent = peliculas.dmz.nombrePelicula;
    sinopsis.textContent = peliculas.dmz.sinopsis;
  }
  else if(nombrePelicula == 'elproyectoadam') {
    imagenGrande.setAttribute('src', peliculas.elproyectoadam.src);
    nombre.textContent = peliculas.elproyectoadam.nombrePelicula;
    sinopsis.textContent = peliculas.elproyectoadam.sinopsis;
  }
  else if(nombrePelicula == 'eternals') {
    imagenGrande.setAttribute('src', peliculas.eternals.src);
    nombre.textContent = peliculas.eternals.nombrePelicula;
    sinopsis.textContent = peliculas.eternals.sinopsis;
  }
  else if(nombrePelicula == 'halo') {
    imagenGrande.setAttribute('src', peliculas.halo.src);
    nombre.textContent = peliculas.halo.nombrePelicula;
    sinopsis.textContent = peliculas.halo.sinopsis;
  }
  else if(nombrePelicula == 'jurassicisland') {
    imagenGrande.setAttribute('src', peliculas.jurassicisland.src);
    nombre.textContent = peliculas.jurassicisland.nombrePelicula;
    sinopsis.textContent = peliculas.jurassicisland.sinopsis;
  }
  else if(nombrePelicula == 'lastsurvivors') {
    imagenGrande.setAttribute('src', peliculas.lastsurvivors.src);
    nombre.textContent = peliculas.lastsurvivors.nombrePelicula;
    sinopsis.textContent = peliculas.lastsurvivors.sinopsis;
  }
  else if(nombrePelicula == 'matrix') {
    imagenGrande.setAttribute('src', peliculas.matrix.src);
    nombre.textContent = peliculas.matrix.nombrePelicula;
    sinopsis.textContent = peliculas.matrix.sinopsis;
  }
  else if(nombrePelicula == 'projectgemini') {
    imagenGrande.setAttribute('src', peliculas.projectgemini.src);
    nombre.textContent = peliculas.projectgemini.nombrePelicula;
    sinopsis.textContent = peliculas.projectgemini.sinopsis;
  }
  else if(nombrePelicula == 'residentevil') {
    imagenGrande.setAttribute('src', peliculas.residentevil.src);
    nombre.textContent = peliculas.residentevil.nombrePelicula;
    sinopsis.textContent = peliculas.residentevil.sinopsis;
  }
  else if(nombrePelicula == 'sonic2') {
    imagenGrande.setAttribute('src', peliculas.sonic2.src);
    nombre.textContent = peliculas.sonic2.nombrePelicula;
    sinopsis.textContent = peliculas.sonic2.sinopsis;
  }
  else if(nombrePelicula == 'theprototype') {
    imagenGrande.setAttribute('src', peliculas.theprototype.src);
    nombre.textContent = peliculas.theprototype.nombrePelicula;
    sinopsis.textContent = peliculas.theprototype.sinopsis;
  }
}