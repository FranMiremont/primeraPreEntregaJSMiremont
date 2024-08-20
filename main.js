// Función para mostrar el menú de opciones
function mostrarMenu() {
  alert("Menú de opciones:\n1. Hamburguesa ($10)\n2. Pizza ($15)\n3. Ensalada ($8)\n4. Terminar");
}

// Función para procesar la elección del usuario
function procesarElección() {
  var elección = prompt("Ingrese su elección (1-4):");
  if (elección == 1) {
    alert("Usted ha elegido la hamburguesa. Precio: $10");
  } else if (elección == 2) {
    alert("Usted ha elegido la pizza. Precio: $15");
  } else if (elección == 3) {
    alert("Usted ha elegido la ensalada. Precio: $8");
  } else if (elección == 4) {
    alert("Gracias por su pedido. ¡Hasta luego!");
    return false;
  } else {
    alert("Opción inválida. Por favor, inténtelo de nuevo.");
  }
  return true;
}

// Ciclo para mostrar el menú y procesar la elección del usuario
while (true) {
  mostrarMenu();
  if (!procesarElección()) {
    break;
  }
}