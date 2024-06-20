//Cotizador aproximado de taller de chapería y pintura

let cotizacion;
let opcion;
let sumaCambio = 0;
let sumaReparacion = 0;
let sumaPintura = 0;
let total;
let piezasSeleccionadas = []; 
let cotizaciones=[];
let idCotizacion=1;

precioCambio = {
  paragolpes: 15000,
  capot: 20000,
  guardabarros: 15000,
  puerta: 20000,
  tapa_baul: 20000,
  techo: 20000,
  faro: 10000,
  opticas: 10000,
  manijas: 10000,
  levantavidrio: 10000,
};
precioReparacion = {
  paragolpes: 7000,
  capot: 10000,
  guardabarros: 7000,
  puerta: 10000,
  tapa_baul: 10000,
  techo: 10000,
  faro: 5000,
  opticas: 5000,
  manijas: 5000,
  levantavidrio: 5000,
};
precioPintura = {
  paragolpes: 90000,
  capot: 140000,
  guardabarros: 90000,
  puerta: 110000,
  tapa_baul: 110000,
  techo: 140000,
};

function cotizarChaperia() {
  let opcion2 = "";
  while (opcion2 !== "0") {
    opcion2 = prompt(`Cotización de chapería, ingrese la opción:
                    1. Cambio
                    2. Reparación
                    0. Volver`);
    switch (opcion2) {
      case "1":
        cotizarCambio();
        break;
      case "2":
        cotizarReparacion();
        break;
      case "0":
        alert("Volviendo al menú principal");
        return;
        break;
      default:
        alert("Ingrese un num válido");
        break;
    }
  }
}
function cotizarCambio() {
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
    let pieza = "";
    switch (opcion3) {
      case "1":
        pieza = "paragolpes";
        break;
      case "2":
        pieza = "capot";
        break;
      case "3":
        pieza = "guardabarros";
        break;
      case "4":
        pieza = "puerta";
        break;
      case "5":
        pieza = "tapa_baul";
        break;
      case "6":
        pieza = "techo";
        break;
      case "7":
        pieza = "faro";
        break;
      case "8":
        pieza = "opticas";
        break;
      case "9":
        pieza = "manijas";
        break;
      case "10":
        pieza = "levantavidrio";
        break;
      case "0":
        alert("Volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    if (pieza !== "") {
      sumaCambio += precioCambio[pieza];
      piezasSeleccionadas.push({
        tipo: "cambio",
        pieza: pieza,
        costo: precioCambio[pieza],
      });
      alert(`Agregado ${pieza}. Precio del cambio: $ ${precioCambio[pieza]}`);
    }
    alert("El precio total del cambio es: $" + sumaCambio);
  }
}

function cotizarReparacion() {
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
    let pieza = "";
    switch (opcion4) {
      case "1":
        pieza = "paragolpes";
        break;
      case "2":
        pieza = "capot";
        break;
      case "3":
        pieza = "guardabarros";
        break;
      case "4":
        pieza = "puerta";
        break;
      case "5":
        pieza = "tapa_baul";
        break;
      case "6":
        pieza = "techo";
        break;
      case "7":
        pieza = "faro";
        break;
      case "8":
        pieza = "opticas";
        break;
      case "9":
        pieza = "manijas";
        break;
      case "10":
        pieza = "levantavidrio";
        break;
      case "0":
        alert("Volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    if (pieza!=="") {
      let costo = calcularDanio(precioReparacion[pieza]);
      sumaReparacion += costo;
      piezasSeleccionadas.push({
        tipo: "reparacion",
        pieza: pieza,
        costo: costo,
      });
      alert(`Agregado ${pieza}. Precio de la reparación: $${costo}`);
    }
    alert("El precio total de la reparación es: $" + sumaReparacion);
  }
}
function calcularDanio(base) {
  let danio = prompt("¿Cuál es el porcentaje de daño aparente de la pieza?");
  let resultado = base + (base * danio) / 100;
  return resultado;
}
function cotizarPintura() {
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
    let pieza = "";
    switch (opcion3) {
      case "1":
        pieza = "paragolpes";
        break;
      case "2":
        pieza = "capot";
        break;
      case "3":
        pieza = "guardabarros";
        break;
      case "4":
        pieza = "puerta";
        let puerta = prompt(
          "¿La puerta debe pintarse de ambos lados? 1: Sí, 2: No"
        );
        let costoColor= pinturaDeColor(precioPintura[pieza]);
        if (puerta == "1") {
          costoColor=costoColor*1.7
          sumaPintura += costoColor;
          piezasSeleccionadas.push({
            tipo: "pintura",
            pieza: pieza,
            costo: costoColor,
          });
          alert(
            `Agregado ${pieza}. Precio de la pintura: $${costoColor}`
          );
        } else {
          sumaPintura += costoColor;
          piezasSeleccionadas.push({
            tipo: "pintura",
            pieza: pieza,
            costo: costoColor,
          });
          alert(
            `Agregado ${pieza}. Precio de la pintura: $${costoColor}`
          );
        }
      
        alert(`El precio total de la pintura es: $${sumaPintura}`);
        continue;
      case "5":
        pieza = "tapa_baul";
        break;
      case "6":
        pieza = "techo";
        break;
      case "0":
        alert("Volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    if (pieza!=="") {
      let costoColor= pinturaDeColor(precioPintura[pieza]);
      sumaPintura += costoColor;
      piezasSeleccionadas.push({
        tipo: "pintura",
        pieza: pieza,
        costo: costoColor,
      });
      alert(
        `Agregado ${pieza}. Precio de la pintura: $${costoColor}`
      );
    }
    alert(`El precio total de la pintura es: $${sumaPintura}`);
  }
}

function pinturaDeColor(sumaPintura) {
  let color = prompt("La pintura es color (1) Blanco, (2) Otro");
  if (color == 2) {
    return (sumaPintura = sumaPintura * 1.3);
  } else {
    return sumaPintura;
  }
}

cotizacion = prompt(
  "Indique si la cotización es (1) particular o (2) por Seguro"
);
if (cotizacion == 2) {
  total = 2500;
} else {
  total = 0;
}

while (opcion !== "0") {
  
 
  opcion = prompt(`Ingrese el servicio que desea consultar:
    1. Chapería
    2. Pintura
    0. Finalizar cotización`);
  switch (opcion) {
    case "1":
      cotizarChaperia();
      break;
    case "2":
      cotizarPintura();
      break;
    case "0":
      total = total + sumaCambio + sumaReparacion + sumaPintura;
      alert("El precio total es: $" + total);
      console.log(piezasSeleccionadas);
      let id = idCotizacion++;
      cotizaciones.push({ id, piezas: piezasSeleccionadas });
      console.log(cotizaciones);
      break;
    default:
      alert("Ingrese un valor válido");
      break;
  }

}

