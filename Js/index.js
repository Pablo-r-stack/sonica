//VARIABLES
// Vincular elementos necesarios al DOM
const contenedorCartas = document.querySelector('.contenedor-cartas');

// Clonar nodo del template
const templateCarta = document.querySelector('#template-carta').content;


//EVENTOS
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const datos = await pedirDatos();
        if (datos.shows && datos.shows.length > 0) {
            datos.shows.forEach(show => {
                const nuevaCarta = crearCartaBanda(show.nombre, show.fecha, show.lugar, show.imagen);
                contenedorCartas.appendChild(nuevaCarta);
            });
        }else{
            contenedorCartas.innerHTML += `<h2>Aun no hay shows disponibles</h2>`;
        }
    } catch (error) {
        contenedorCartas.innerHTML += `<h2>Ocurrió un error, estamos trabajando para resolverlo</h2>`;
    }
});


//FUNCIONES

//Funcion de pedir datos
async function pedirDatos() {
    let respuesta = await fetch("./data/bandas.json");
    let datos = respuesta.json();
    return datos;
}

// Función de creación del div carta banda
function crearCartaBanda(nombre, fecha, lugar, imagenSrc) {
    const nuevaCarta = templateCarta.cloneNode(true);
    nuevaCarta.querySelector('img').src = imagenSrc;
    nuevaCarta.querySelector('.texto-carta p:nth-child(1)').textContent = nombre;
    nuevaCarta.querySelector('.texto-carta p:nth-child(2)').textContent = fecha;
    nuevaCarta.querySelector('.texto-carta p:nth-child(3)').textContent = lugar;
    return nuevaCarta;
}