//Cotizador aproximado de taller de chapería y pintura
//Está pensado para que hayan 3 secciones, en vez de ciclos serán casillas a marcar por el cliente.

/*
---------------FALTA: HACER FUNCIONES ----------------
-función en CHAPERIA que pida las 10 opciones así no lo repito; 
-función en daño, que lo puda y saque la cuenta
-función en PUNTURA, que pida el color (con color es 1.3 veces más caro que blanco):
    lógica del color:
        
 let color=prompt('¿De qué color desea pintar: 1: Blanco, 2: Otro?')
 if (color==2) {
   sumaPintura=sumaPintura*1.4;
 } 
 console.log(sumaPintura);
 
 */
/*HACER MAS CLARAS LAS OPCIONES
PREGUNTAR SI ES PARTICULAR O POR SEGURO5*/

let opcion;
let sumaCambio = 0;
let sumaReparacion = 0;
let sumaPintura = 0;
let total;

while (opcion !== "0") {
  opcion = prompt(`Ingrese el servicio que desea consultar:
    1.Chapería
    2.Pintura
    0. Finalizar `);
  switch (opcion) {
    case "1":
      let opcion2 = "";
      while (opcion2 !== "0") {
        opcion2 = prompt(`Cotización de chapería, ingrese la opción:
                    1. Cambio
                    2. Reparación
                    0. Volver`);
        switch (opcion2) {
          case "1":
            let opcion3 = "";
            while (opcion3 !== "0") {
              opcion3 = prompt(`¿Qué pieza desea cambiar?
                                    1. Paragolpes
                                    2. Capot
                                    3. Guardabarros
                                    4. Puerta
                                    5. Tapa baúl
                                    6. Techo
                                    7. Faro
                                    8. Ópticas
                                    9. Manijas
                                    10.Levantavidrio
                                    0. Volver`);
              if (opcion3 == "1" || opcion3 == "3") {
                alert("Agregado 1 o 3");
                sumaCambio += 15000;
              } else if (
                opcion3 == "7" ||
                opcion3 == "8" ||
                opcion3 == "9" ||
                opcion3 == "10"
              ) {
                alert("Agregado 4,7,8,9,10");
                sumaCambio += 10000;
              } else if (
                opcion3 == "2" ||
                opcion3 == "4" ||
                opcion3 == "5" ||
                opcion3 == "6"
              ) {
                alert("Agregado 2,5");
                sumaCambio += 20000;
              } else if (opcion3 == "0") {
                alert("volviendo");
                break;
              } else {
                alert("ingrese una opción válida");
              }
              alert('El precio del cambio es: $'+sumaCambio);
            }
            break;
          case "2":
            let opcion4;
            while (opcion4 !== "0") {
              opcion4 = prompt(`¿Qué pieza desea reparar?
                                    1. Paragolpes
                                    2. Capot
                                    3. Guardabarros
                                    4. Puerta
                                    5. Tapa baúl
                                    6. Techo
                                    7. Faro
                                    8. Ópticas
                                    9. Manijas
                                    10.Levantavidrio
                                    0. Volver`);
              if (opcion4 == "1" || opcion4 == "3") {
                alert("Agregado 1 o 3");
                let danio = prompt(
                  "¿Cuál es el porcentaje de daño aparente de la pieza?"
                );
                sumaReparacion = 7000 + (7000 * danio) / 100;
                danio = 0;
                console.log(sumaReparacion);
              } else if (
                opcion4 == "7" ||
                opcion4 == "8" ||
                opcion4 == "9" ||
                opcion4 == "10"
              ) {
                alert("Agregado 4,7,8,9,10");
                danio = prompt(
                  "¿Cuál es el porcentaje de daño aparente de la pieza?"
                );
                sumaReparacion += 5000 + (5000 * danio) / 100;
              } else if (
                opcion4 == "2" ||
                opcion4 == "4" ||
                opcion4 == "5" ||
                opcion4 == "6"
              ) {
                alert("Agregado 2,5");
                danio = prompt(
                  "¿Cuál es el porcentaje de daño aparente de la pieza?"
                );
                sumaReparacion += 10000 + (10000 * danio) / 100;
              } else if (opcion4 == "0") {
                alert("volviendo");
                break;
              } else {
                alert("ingrese una opción válida");
              }
              alert('El precio de la reparación es: $'+sumaReparacion);
            }
            break;
          case "0":
            console.log(opcion2);
            break;
          default:
            alert("Ingrese un num válido");
            break;
        }
      }
      
      break;
    case "2":
      let opcion3 = "";
      while (opcion3 !== "0") {
        opcion3 = prompt(`¿Qué pieza desea pintar?
                            1. Paragolpes
                            2. Capot
                            3. Guardabarros
                            4. Puerta
                            5. Tapa baúl
                            6. Techo
                            0. Volver`);
        if (opcion3 == "1" || opcion3 == "3") {
          alert("Agregado 1 o 3");
          sumaPintura += 90000;
        } else if (
          opcion3 == "2" ||
          opcion3 == "6"
        ) {
          alert("Agregado 2,6");
          sumaPintura += 140000;
        } else if (
          opcion3 == "4"
        ) {
          alert("Agregado 4");
          let puerta=prompt('¿La puerta debe pintarse de ambos lados 1: Si, 2: No?')
          if (puerta==1) {
            sumaPintura += 180000;
          } else {
            sumaPintura += 110000;
          } 
        } else if (opcion3 == "5") {
            alert("Agregado 5");
            sumaPintura += 110000;
        } else if (opcion3 == "0") {
          alert("volviendo");
          break;
        } else {
          alert("ingrese una opción válida");
        }
        alert('El precio de la pintura es: $'+sumaPintura);
      }

      break;
    case "0":
      total=sumaCambio+sumaReparacion+sumaPintura;
      alert("El precio total es: $"+total);
      break;

    default:
      alert("Ingrese un valor válido");
      break;
  }
}

