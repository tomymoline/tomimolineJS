// Consultar al usuario el año de su vehiculo (valor numerico)
// Pasarle por alert el valor que tiene su impuesto de patente anual
// Si el auto tiene menos de 10 años de antiguedad abona $ 50000 (0-9 años)
// Si el auto tiene entre 10 años y 15 años de antiguedad abona $ 35000 (10 - 15 años)
// Sino abona $ 10000 ( mayor a 15

let edad = prompt("eres mayor de 18 años? responde si o no!");

if (edad == "si") {
  alert("bienvenido a TravelSugest.com!");
} else {
  alert("lo lamento, debes ser mayor de edad");
}

let nombreUsuario = prompt("cual es tu nombre?");

alert(
  "hola " +
    nombreUsuario +
    " " +
    "te voy a ayudar a cosneguir tu destino ideal!"
);

for (let index = 0; index < 3; index++) {
  alert("hola coders");
}
