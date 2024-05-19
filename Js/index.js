// VARIABLES
// Vincular elementos necesarios al DOM
const contenedorCartas = document.querySelector('.contenedor-cartas');

// Clonar nodo del template
const templateCarta = document.querySelector('#template-carta').content;

// EVENTOS
document.addEventListener('DOMContentLoaded', async function () {
    try {
        const datos = await pedirDatos();
        if (datos.shows && datos.shows.length > 0) {
            datos.shows.forEach(show => {
                const nuevaCarta = crearCartaBanda(show.nombre, show.fecha, show.lugar, show.hora, show.direccion, show.imagen);
                contenedorCartas.appendChild(nuevaCarta);
            });
        } else {
            contenedorCartas.innerHTML += `<h2>Aún no hay shows disponibles</h2>`;
        }
    } catch (error) {
        contenedorCartas.innerHTML += `<h2>Ocurrió un error, estamos trabajando para resolverlo</h2>`;
    }
});

// FUNCIONES

// Función para pedir datos
async function pedirDatos() {
    let respuesta = await fetch("./data/bandas.json");
    let datos = await respuesta.json();
    return datos;
}

// Función para crear el div de la carta de la banda
function crearCartaBanda(nombre, fecha, lugar, hora, direccion, imagenSrc) {
    const nuevaCarta = templateCarta.cloneNode(true);
    nuevaCarta.querySelector('img').src = imagenSrc;
    nuevaCarta.querySelector('.texto-carta p:nth-child(1)').textContent = nombre;
    nuevaCarta.querySelector('.texto-carta p:nth-child(2)').textContent = fecha;
    nuevaCarta.querySelector('.texto-carta p:nth-child(3)').textContent = lugar;

    nuevaCarta.querySelector('.carta').addEventListener('click', () => {
        localStorage.setItem('selectedShow', JSON.stringify({ nombre, fecha, lugar, hora, direccion, imagenSrc }));
        window.location.href = '/evento.html';
    });

    return nuevaCarta;
}
