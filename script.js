let viajero = prompt("Cual es tu nombre?");
let pais = prompt("hola" + " " + viajero + " " + "en que pais vives?");
let edad = prompt("Cual es tu edad??");

alert(
  "tu nombre es" +
    " " +
    viajero +
    " " +
    ", vives en" +
    "  " +
    pais +
    " " +
    "y tienes" +
    " " +
    edad +
    "  " +
    "de edad"
);

if (pais == "Argentina" || "argentina") {
  alert(
    "bueno" + " " + viajero + " ," + " tu aeropuerto mas cercano es EZEIZA"
  );
}

let destino1 = "Barcelona" + " ";
let destino2 = "Londres" + " ";
let destino3 = "Paris" + " ";
let destino4 = "Dublin" + " ";

alert(
  "los destinos disponibles en esta temporada son:" +
    " " +
    destino1 +
    destino2 +
    destino3 +
    destino4
);

let deseoDeViaje = prompt(
  "te interesa algun destino? de ser asi, escribe su nombre"
);
if (deseoDeViaje == destino1 || destino2 || destino3 || destino4) {
  let fecha = alert(
    " te felicito" +
      " " +
      viajero +
      " " +
      "has elegido un gran lugar para viajar"
  );
} else {
}
