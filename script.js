//FALTA:
// -setear el %de daño para que vaya de 10 a 100.
// -setear que al agregar la reparación el numero del inner se borre
// ver cómo hago para poner el precio con . en los mil 323.000 y no 323000
// Ver si conviene poner un botón de restauración o así está bien.

// Que se guarde el array de cotizaciones en una base de datos o algo así. Cómo hago para qué lo mande a algún lado o lo guarde para que el
//VER COMO ENVÍO EL FORMULARIO DE CONTACTO A UN MAIL.

let cotizacion;
let opcion;
let sumaCambio = 0;
let sumaReparacion = 0;
let sumaPintura = 0;
let total = 0;
let piezasSeleccionadas = [];
let cotizaciones = [];
let idCotizacion = 1;

document.addEventListener('DOMContentLoaded', (event) => {
  const cotizacionesGuardadas = localStorage.getItem('cotizaciones'); //obtengo del localStorage las cotizaciones
  if (cotizacionesGuardadas) { //si hay cotizaciones
    cotizaciones = JSON.parse(cotizacionesGuardadas); //paso el json a objeto
    idCotizacion = (cotizaciones.length) // evalúa si cotizaciones tiene elementos 
    ? cotizaciones[cotizaciones.length - 1].id + 1 //true (arreglo novacío)= tomo el id del último elemento y le sumo 1
    : 1; // false (arreglo vacío)= entonces idCotización=1
  }
});

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
  puerta_ambos_lados: 187000,
  tapa_baul: 110000,
  techo: 140000,
};

function cotizarCambio() {
  const selectPieza = document.getElementById("pieza-cambio");
  const pieza = selectPieza.value;

  if (pieza !== "") {
    sumaCambio += precioCambio[pieza];
    piezasSeleccionadas.push({
      tipo: "cambio",
      pieza: pieza,
      costo: precioCambio[pieza],
    });
    console.log(
      `Agregado ${pieza}. Precio del cambio: $ ${precioCambio[pieza]}`
    );
    console.log("El precio total del cambio es: $" + sumaCambio);

    const piezaTexto = selectPieza.selectedOptions[0].text;
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `${piezaTexto}. Precio: $${precioCambio[pieza]}`;
    document.getElementById("valores-cambio").appendChild(nuevoParrafo);

    document.getElementById('total-cambio').textContent= `${sumaCambio}`;
  }
}

function cotizarReparacion() {
  const selectPieza = document.getElementById("pieza-reparacion");
  const pieza = selectPieza.value;
  if (pieza !== "") {
    let costo = calcularDanio(precioReparacion[pieza]);
    sumaReparacion += costo;
    piezasSeleccionadas.push({
      tipo: "reparacion",
      pieza: pieza,
      costo: costo,
    });
    console.log(`Agregado ${pieza}. Precio de la reparación: $${costo}`);
    console.log("El precio total de la reparación es: $" + sumaReparacion);

    const piezaTexto = selectPieza.selectedOptions[0].text;
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `${piezaTexto}. Precio: $${costo}`;
    document.getElementById("valores-reparacion").appendChild(nuevoParrafo);

    document.getElementById('total-reparacion').textContent= `${sumaReparacion}`;

  }
}
function calcularDanio(base) {
  let danio = parseInt(document.getElementById("danio").value);
  let resultado = base + (base * danio) / 100;
  return resultado;
}

function cotizarPintura() {
  const selectPieza = document.getElementById("pieza-pintura");
  const pieza = selectPieza.value;
  if (pieza !== "") {
    let costoColor = pinturaDeColor(precioPintura[pieza]);
    sumaPintura += costoColor;
    piezasSeleccionadas.push({
      tipo: "pintura",
      pieza: pieza,
      costo: costoColor,
    });
    console.log(`Agregado ${pieza}. Precio de la pintura: $${costoColor}`);

    const piezaTexto = selectPieza.selectedOptions[0].text;
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = `${piezaTexto}. Precio: $${costoColor}`;
    document.getElementById("valores-pintura").appendChild(nuevoParrafo);

    document.getElementById('total-pintura').textContent= `${sumaPintura}`;

  }
  console.log(`El precio total de la pintura es: $${sumaPintura}`);
}

function pinturaDeColor(sumaPintura) {
  let color = document.getElementById("color").value;
  if (color == "otro") {
    return (sumaPintura = sumaPintura * 1.3);
  } else {
    return sumaPintura;
  }
}

function cotizacionFinal() {
  console.log(total);
  console.log("C " + sumaCambio + " P " + sumaPintura + " R " + sumaReparacion);
  total = total + sumaCambio + sumaReparacion + sumaPintura;
  console.log("El precio total es: $" + total);
  console.log(piezasSeleccionadas);
  let id = idCotizacion++;
  const cotizacion = {
    id: id,
    piezas: piezasSeleccionadas,
    total: total,
    fecha: new Date().toLocaleString()
  };
  cotizaciones.push(cotizacion);
  console.log(cotizaciones);

  localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));

  document.getElementById('cotizacion-id').textContent= `${id}`;
  document.getElementById('total-final').textContent= `${total}`;
  mostrarCotizaciones()
  resetear();
}
function cotizSeguro() {
  const seguro = document.getElementById("cotiz-seguro");
  if (seguro.checked) {
    total = total + 2500;
    console.log(total);
  } else {
    total = total;
    console.log(total);
  }
}
function resetear() {
  sumaCambio = 0;
  sumaPintura = 0;
  sumaReparacion = 0;
  total = 0;
  piezasSeleccionadas = [];

  document.getElementById('total-cambio').textContent= `0`;
  document.getElementById('total-reparacion').textContent= `0`;
  document.getElementById('total-pintura').textContent= `0`;
  document.getElementById('valores-cambio').innerHTML='';
  document.getElementById('valores-reparacion').innerHTML='';
  document.getElementById('valores-pintura').innerHTML=''
}



function mostrarCotizaciones() {
  
  const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones'));

  if (cotizacionesGuardadas && cotizacionesGuardadas.length) {
    cotizacionesGuardadas.forEach(cotizacion => {
      console.log(`Cotización N°: ${cotizacion.id}, Fecha: ${cotizacion.fecha}, Total: $${cotizacion.total}`);
    });
  } else {
    console.log('No hay cotizaciones guardadas');
  }
};

document
  .getElementById("agregar-cambio")
  .addEventListener("click", cotizarCambio);
document
  .getElementById("agregar-reparacion")
  .addEventListener("click", cotizarReparacion);
document
  .getElementById("agregar-pintura")
  .addEventListener("click", cotizarPintura);
document.getElementById("cotiz-seguro").addEventListener("change", cotizSeguro);
document
  .getElementById("cotizacion-final")
  .addEventListener("click", cotizacionFinal);
