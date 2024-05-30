//Cotizador aproximado de taller de chapería y pintura
//Está pensado para que hayan 3 secciones, en vez de ciclos serán casillas a marcar por el cliente.


let cotizacion;
let opcion;
let sumaCambio = 0;
let sumaReparacion = 0;
let sumaPintura = 0;
let total;

precioCambio ={
  paragolpes_guardabarro: 15000,
  capot_puerta_baul_techo: 20000,
  faro_opticas_manijas_levantavidrio: 10000
};
precioReparacion={
  paragolpes_guardabarro: 7000,
  capot_puerta_baul_techo: 10000,
  faro_opticas_manijas_levantavidrio: 5000
};
precioPintura={
  paragolpes_guardabarro: 90000,
  capot_techo: 140000,
  puerta_tapa_baul: 110000
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
    switch (opcion3) {
      case "1":
      case "3":
        alert("Agregado 1 o 3");
        sumaCambio += precioCambio.paragolpes_guardabarro;
        break;
      case "7":
      case "8":
      case "9":
      case "10":
        alert("Agregado 4,7,8,9,10");
        sumaCambio += precioCambio.faro_opticas_manijas_levantavidrio;
        break;
      case "2":
      case "4":
      case "5":
      case "6":
        alert("Agregado 2,5");
        sumaCambio += precioCambio.capot_puerta_baul_techo;
        break;
      case "0":
        alert("volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    alert("El precio del cambio es: $" + sumaCambio);
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
    switch (opcion4) {
      case "1":
      case "3":
        alert("Agregado 1 o 3");
        sumaReparacion += calcularDanio(precioReparacion.paragolpes_guardabarro);
        break;
      case "7":
      case "8":
      case "9":
      case "10":
        alert("Agregado 7,8,9,10");
        sumaReparacion += calcularDanio(precioReparacion.faro_opticas_manijas_levantavidrio);
        break;
      case "2":
      case "4":
      case "5":
      case "6":
        alert("Agregado 2, 4,5,6");
        sumaReparacion += calcularDanio(precioReparacion.capot_puerta_baul_techo);
        break;
      case "0":
        alert("volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    alert("El precio de la reparación es: $" + sumaReparacion);
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
    switch (opcion3) {
      case "1":
      case "3":
        alert("Agregado 1 o 3");
        sumaPintura += precioPintura.paragolpes_guardabarro;
        break;
      case "2":
      case "6":
        alert("Agregado 2,6");
        sumaPintura += precioPintura.capot_techo;
        break;
      case "4":
        alert("Agregado 4");
        let puerta = prompt(
          "¿La puerta debe pintarse de ambos lados 1: Si, 2: No?"
        );
        if (puerta == "1") {
          sumaPintura += precioPintura.puerta_tapa_baul * 1.5;
        } else {
          sumaPintura += precioPintura.puerta_tapa_baul;
        }
        break;
      case "5":
        alert("Agregado 5");
        sumaPintura += precioPintura.puerta_tapa_baul;
        break;
      case "0":
        alert("volviendo");
        return;
      default:
        alert("Ingrese una opción válida");
        break;
    }
    alert("El precio de la pintura es: $" + sumaPintura);
  }
    
}
function pinturaDeColor(sumaPintura) {
  let color=prompt('La pintura es color (1) Blanco, (2) Otro')
  if (color==2) {
    return  sumaPintura=sumaPintura*1.3;
  } else{
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
      sumaPintura=pinturaDeColor(sumaPintura);
      alert("El precio de la pintura es: $" + sumaPintura);
      break;
    case "0":
      total = total + sumaCambio + sumaReparacion + sumaPintura;
      alert("El precio total es: $" + total);
      break;
    default:
      alert("Ingrese un valor válido");
      break;
  }
}
