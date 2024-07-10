//FALTA:
// -setear el %de daño para que vaya de 10 a 100.
// -setear que al agregar la reparación el numero del input num se borre
// ver cómo hago para poner el precio con . en los mil ej: 323.000 y no 323000

//-->> PARA SETEAR OBJ: stringify, PARA GETTEAR OBJETOS: parse

//Incorporar la imagen al mail
//Poner un mail automático al usuario
//crear el JSON para consultarlo (en lugar de API)

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
  Swal.fire({
    title: 'Info importante',
    text: 'Recordá que esta cotización es aproximada y está sujeta a modificación según cosidere el técnico',
    icon: 'info',
    confirmButtonText: 'Entendido'
  })

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

  localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones)); // seteo el objeto y lo paso a JSON (str)

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
  
  const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones')); //obtengo el array como objeto

  if (cotizacionesGuardadas && cotizacionesGuardadas.length) { //si el objeto no es undefined o vacío
    cotizacionesGuardadas.forEach(cotizacion => { //itero e imprimo
      console.log(`Cotización N°: ${cotizacion.id}, Fecha: ${cotizacion.fecha}, Total: $${cotizacion.total}`);
    });
  } else {
    console.log('No hay cotizaciones guardadas'); //este no aparece nunca porque esta función se llama siempre despues de finalizar una cotización
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
  
  document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('AnaHu5SM9sMqbeAHE');
    
    document.querySelector('.formulario').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Capturo los datos del formulario usando FormData
        const formData = new FormData(this);
        const formObject = {};

        // Convierto FormData a objeto para poder acceder a los valores
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        const cotizacionID = formObject.codigo;
        const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones'));
        if (cotizacionesGuardadas) {
          const cotizacion = cotizacionesGuardadas.find(cot => cot.id == cotizacionID);
          formObject['cotizacion']= JSON.stringify(cotizacion);
          formObject['total'] = cotizacion.total;
        }
          console.log(formObject);

          // obtengo el archivo de imagen seleccionado
        const imageFile = formData.get('imageUpload');

        // Subo el archivo a Imgur y obtengo la URL
        handleImageUpload(imageFile)
            .then(imageUrl => {
                // Datos para enviar con EmailJS, incluyendo la URL de la imagen
                const templateParams = {
                    name: formObject.name,
                    apellido: formObject.apellido,
                    email: formObject.email,
                    tel: formObject.tel,
                    cotizacion: formObject.cotizacion,
                    total: formObject.total,
                    codigo: formObject.codigo,
                    mensaje: formObject.mensaje,
                    imageUrl: imageUrl
                };

                console.log(templateParams);

                // Enviar el correo usando EmailJS
                return emailjs.send('service_keci9hp', 'template_1t7vygr', templateParams, { attachments: [{ name: imageFile.name, data: imageFile }] });
            })
            .then(function(response) {
                console.log('Correo enviado con éxito!', response.status, response.text);
                alert('¡Correo enviado con éxito!');
            })
            .catch(function(error) {
                console.error('Error al enviar el correo:', error);
                alert('Error al enviar el correo. Por favor, inténtalo nuevamente más tarde.');
            });

        // Resetear el formulario después de enviar
        this.reset();
    });

    // Función asincrónica para manejar la carga de la imagen y obtener la URL
    async function handleImageUpload(imageFile) {
        try {
            const imageUrl = await uploadToImgur(imageFile);
            console.log('Imagen subida correctamente:', imageUrl);
            return imageUrl; // Devuelve la URL de la imagen subida
        } catch (error) {
            console.error('Error al subir la imagen:', error);
            throw error; // Propaga el error para manejarlo más arriba si es necesario
        }
    }

    // Función para subir la imagen a Imgur
    async function uploadToImgur(imageFile) {
        const clientId = 'e95ceface8033e2'; 
        const url = 'https://api.imgur.com/3/image';
        
        const formData = new FormData();
        formData.append('image', imageFile);
      
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${clientId}`
            },
            body: formData
        });
      
        const data = await response.json();
        if (data.success) {
            return data.data.link; // Devuelve la URL pública de la imagen subida
        } else {
            throw new Error('Error al subir la imagen a Imgur');
        }
    }
});

  