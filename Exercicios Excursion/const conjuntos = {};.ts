const conjuntos = {};

while (true) {
  console.log("Menú:");
  console.log("a- Crear un conjunto vacío.");
  console.log("b- Eliminar un conjunto.");
  console.log("c- Crear un conjunto con la unión de dos conjuntos.");
  console.log("d- Crear un conjunto con la intersección de dos conjuntos.");
  console.log("e- Introducir un elemento en un conjunto.");
  console.log("f- Eliminar un elemento de un conjunto.");
  console.log("g- Salir.");

  const opcion = prompt("Selecciona una opción (a, b, c, d, e, f, g):");

  switch (opcion) {
    case 'a':
      const nombreConjuntoA = prompt("Indica el nombre del conjunto a crear:");
      conjuntos[nombreConjuntoA] = new Set();
      console.log(`Conjunto "${nombreConjuntoA}" creado.`);
      break;
      
    case 'b':
      const nombreConjuntoB = prompt("Indica el nombre del conjunto a eliminar:");
      if (conjuntos[nombreConjuntoB]) {
        delete conjuntos[nombreConjuntoB];
        console.log(`Conjunto "${nombreConjuntoB}" eliminado.`);
      } else {
        console.log(`El conjunto "${nombreConjuntoB}" no existe.`);
      }
      break;
      
    case 'c':
      const nombreConjuntoC1 = prompt("Indica el nombre del primer conjunto:");
      const nombreConjuntoC2 = prompt("Indica el nombre del segundo conjunto:");
      const nuevoConjuntoC = prompt("Indica el nombre del conjunto resultante:");
      if (conjuntos[nombreConjuntoC1] && conjuntos[nombreConjuntoC2]) {
        conjuntos[nuevoConjuntoC] = new Set([...conjuntos[nombreConjuntoC1], ...conjuntos[nombreConjuntoC2]]);
        console.log(`Conjunto "${nuevoConjuntoC}" creado con la unión de "${nombreConjuntoC1}" y "${nombreConjuntoC2}".`);
      } else {
        console.log("Alguno de los conjuntos no existe.");
      }
      break;
      
    case 'd':
      const nombreConjuntoD1 = prompt("Indica el nombre del primer conjunto:");
      const nombreConjuntoD2 = prompt("Indica el nombre del segundo conjunto:");
      const nuevoConjuntoD = prompt("Indica el nombre del conjunto resultante:");
      if (conjuntos[nombreConjuntoD1] && conjuntos[nombreConjuntoD2]) {
        conjuntos[nuevoConjuntoD] = new Set([...conjuntos[nombreConjuntoD1]].filter(x => conjuntos[nombreConjuntoD2].has(x)));
        console.log(`Conjunto "${nuevoConjuntoD}" creado con la intersección de "${nombreConjuntoD1}" y "${nombreConjuntoD2}".`);
      } else {
        console.log("Alguno de los conjuntos no existe.");
      }
      break;
      
    case 'e':
      const nombreConjuntoE = prompt("Indica el nombre del conjunto al que agregar un elemento:");
      const elementoE = prompt("Introduce el elemento a agregar:");
      if (conjuntos[nombreConjuntoE]) {
        conjuntos[nombreConjuntoE].add(elementoE);
        console.log(`Elemento "${elementoE}" agregado al conjunto "${nombreConjuntoE}".`);
      } else {
        console.log(`El conjunto "${nombreConjuntoE}" no existe.`);
      }
      break;
      
    case 'f':
      const nombreConjuntoF = prompt("Indica el nombre del conjunto del que eliminar un elemento:");
      const elementoF = prompt("Introduce el elemento a eliminar:");
      if (conjuntos[nombreConjuntoF]) {
        if (conjuntos[nombreConjuntoF].has(elementoF)) {
          conjuntos[nombreConjuntoF].delete(elementoF);
          console.log(`Elemento "${elementoF}" eliminado del conjunto "${nombreConjuntoF}".`);
        } else {
          console.log(`El elemento "${elementoF}" no existe en el conjunto "${nombreConjuntoF}".`);
        }
      } else {
        console.log(`El conjunto "${nombreConjuntoF}" no existe.`);
      }
      break;
      
    case 'g':
      console.log("Saliendo del programa.");
      return;
      
    default:
      console.log("Opción no válida. Por favor, selecciona una opción válida.");
  }
}
