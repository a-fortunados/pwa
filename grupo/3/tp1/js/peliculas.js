let peliculas = {
  venom2: {
    nombre: "Venom 2",
    src: "./images/ciencia-ficcion/venom-2-p.jpg",
    sinopsis: "Después de encontrar un cuerpo anfitrión en el periodista de investigación Eddie Brock, el simbionte alienígena debe enfrentarse a un nuevo enemigo, Carnage, el alter ego del asesino en serie Cletus Kasady",
  },
  dmz: {
    nombre: "DMZ",
    src: "./images/ciencia-ficcion/dmz-p.jpg",
    sinopsis: "DMZ es una serie de ciencia ficción que se ambienta en un futuro cercano cuando Estados Unidos se ve envuelto en una guerra civil dejando a Manhattan como una zona desmilitarizada (DMZ), destruida y aislada del resto del mundo.",
  },
  elproyectoadam: {
    nombre: "El Proyecto Adam",
    src: "./images/ciencia-ficcion/el-proyecto-adam-p.jpg",
    sinopsis: "Adam Reed, un viajero del tiempo y piloto de combate, aterriza en el año 2022. Allí, se encuentra con su yo de doce años y, junto a él, tratará de salvar el futuro.",
  },
  eternals: {
    nombre: "Eternals",
    src: "./images/ciencia-ficcion/eternals-p.jpeg",
    sinopsis: "Los Eternos son una raza de seres inmortales con poderes sobrehumanos que han vivido en secreto en la Tierra durante miles de años. Aunque nunca han intervenido en el destino de la población, ahora una amenaza se cierne sobre la humanidad.",
  },
  halo: {
    nombre: "Halo",
    src: "./images/ciencia-ficcion/halo-p.jpg",
    sinopsis: "'Halo' es una de las franquicias más populares del mundo de los videojuegos. La historia principal se centra en un conflicto interestelar entre los humanos y unos alienígenas guiados por unos profetas obsesionados con una antigua especie conocida como los Forerunners.",
  },
  jurassicisland: {
    nombre: "Jurassic Island",
    src: "./images/ciencia-ficcion/jurassic-island-p.png",
    sinopsis: "Ava descubre el paradero de su padre desaparecido en una isla desconocida; un mítico mundo perdido descubierto ante ellos por su abuelo. Junto a un grupo de aventureros y científicos, llegan a Jurassic Island, donde queda claro que el equipo anterior se había topado con un desastre. Los dinosaurios y las sanguijuelas tóxicas significan que ya no es una búsqueda de su padre, sino una batalla por la supervivencia.",
  },
  lastsurvivors: {
    nombre: "Last Survivors",
    src: "./images/ciencia-ficcion/last-survivors-p.jpg",
    sinopsis: "Un hombre intenta criar a su hijo en el salvajismo de un mundo postapocalíptico. Sin embargo, el joven desafía a su padre y comienza una relación con una misteriosa mujer.",
  },
  matrix: {
    nombre: "Matrix",
    src: "./images/ciencia-ficcion/matrix-p.jpg",
    sinopsis: "Thomas Anderson lleva una vida cómoda como una eminencia dentro del mundo de los videojuegos, pero tiene problemas para discernir entre lo que es realidad y lo que no lo es. Thomas deberá decidir si sigue al conejo blanco una vez más.",
  },
  projectgemini: {
    nombre: "Project Gemini",
    src: "./images/ciencia-ficcion/project-gemini-p.jpg",
    sinopsis: "Una misión espacial es enviada para terraformar un planeta distante. Sin embargo, la misión se encuentra con algo desconocido que tiene su propio plan para el planeta.",
  },
  residentevil: {
    nombre: "Resident Evil",
    src: "./images/ciencia-ficcion/resident-evil-p.jpg",
    sinopsis: "Los supervivientes intentan descubrir la verdad detrás de la malvada Umbrella Corporation. Mientras, luchan contra zombis sedientos de sangre en los páramos de Raccoon City.",
  },
  sonic2: {
    nombre: "Sonic 2",
    src: "./images/ciencia-ficcion/sonic-2-p.jpg",
    sinopsis: "Después de establecerse en Green Hills, Sonic quiere demostrar que tiene madera de héroe. La prueba de fuego llega con el retorno del malvado Robotnik, y su nuevo compinche, Knuckles, en busca de una esmeralda que destruye civilizaciones. Sonic forma equipo con su propio compañero de fatigas, Tails, y juntos se lanzan a una aventura que les llevará por todo el mundo en busca de la preciada piedra para evitar que caiga en manos equivocadas.",
  },
  theprototype: {
    nombre: "The Prototype",
    src: "./images/ciencia-ficcion/the-prototype-p.jpg",
    sinopsis: "Un humanoide robotizado consigue escapar del control de sus creadores, el gobierno de Estados Unidos. Comenzará entonces una difícil misión en la que tratarán de capturarlo, aunque será difícil ya que el robot ha sido precisamente especializado en ese tipo de situaciones.",
  },
};

let imagenGrande = document.getElementById('img-grande');
let sinopsis = document.getElementById('sinopsisPelicula');
let nombre = document.getElementById('nombrePelicula');

const mostrarPelicula = (nombrePelicula) => {
  imagenGrande.setAttribute('src', peliculas[nombrePelicula].src);
  sinopsis.textContent = peliculas[nombrePelicula].sinopsis;
  nombre.textContent = peliculas[nombrePelicula].nombre;
}