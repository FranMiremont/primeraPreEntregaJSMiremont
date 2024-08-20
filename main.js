// Preguntar nombre del usuario
var nombre = prompt("¿Cuál es su nombre?");

// Saludar al usuario
alert("Bienvenido, " + nombre + " ,espero estés teniendo un bien día");

// Función para mostrar el menú de opciones
function mostrarMenu() {
  alert("Menú de opciones:\n1. Hamburguesa ($10)\n2. Pizza ($15)\n3. Ensalada ($8)\n4. Terminar");
}

// Función para procesar la elección del usuario
function procesarEleccion() {
  var eleccion = prompt("Ingrese su elección (1-4):");
  if (eleccion == 1) {
    alert("Usted ha elegido la hamburguesa. Precio: $10");
  } else if (eleccion == 2) {
    alert("Usted ha elegido la pizza. Precio: $15");
  } else if (eleccion == 3) {
    alert("Usted ha elegido la ensalada. Precio: $8");
  } else if (eleccion == 4) {
    alert("Gracias por su pedido. Buen provecho");
    return false;
  } else {
    alert("Opción inválida. Por favor, inténtelo de nuevo.");
  }
  return true;
}

// Ciclo para mostrar el menú y procesar la elección del usuario
while (true) {
  mostrarMenu();
  if (!procesarEleccion()) {
    break;
  }
}