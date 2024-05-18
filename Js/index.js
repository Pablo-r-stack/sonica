document.addEventListener('DOMContentLoaded', function () {
    // Vincular elementos necesarios al DOM
    const contenedorCartas = document.querySelector('.contenedor-cartas');

    // Clonar nodo del template
    const templateCarta = document.querySelector('#template-carta').content;

    // Función de creación del div carta banda
    function crearCartaBanda(nombre, fecha, lugar, imagenSrc) {
        const nuevaCarta = templateCarta.cloneNode(true);
        nuevaCarta.querySelector('img').src = imagenSrc;
        nuevaCarta.querySelector('.texto-carta p:nth-child(1)').textContent = nombre;
        nuevaCarta.querySelector('.texto-carta p:nth-child(2)').textContent = fecha;
        nuevaCarta.querySelector('.texto-carta p:nth-child(3)').textContent = lugar;
        return nuevaCarta;
    }

    // Iterar sobre el arreglo JSON y generar vistas necesarias
    const shows = [
        { nombre: 'Los Nocheros', fecha: '27 de Noviembre', lugar: 'Cosquin-Cba', imagen: 'img/foto/losnoche.png' },
        { nombre: 'Banda XXI', fecha: '14 de diciembre', lugar: 'Rio 4', imagen: 'img/foto/banda.jpg' },
        { nombre: 'Jean Carlos', fecha: '1 de enero', lugar: 'Cordoba', imagen: 'img/foto/jeancarlos.jpg' },
        { nombre: 'La Konga', fecha: '11 de febrero', lugar: 'Mendoza', imagen: 'img/foto/konga.jpg' },
        { nombre: 'Las Pastillas del Abuelo', fecha: '24 de marzo', lugar: 'Bs As', imagen: 'img/foto/Las-Pastillas.jpg' },
        { nombre: 'Q`Lokura', fecha: '17 de abril', lugar: 'Santa Fe', imagen: 'img/foto/qlokura.jpg' },
    ];

    shows.forEach(show => {
        const nuevaCarta = crearCartaBanda(show.nombre, show.fecha, show.lugar, show.imagen);
        contenedorCartas.appendChild(nuevaCarta);
    });
});
