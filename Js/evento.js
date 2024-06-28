// Recuperar los datos del local storage
const selectedShow = JSON.parse(localStorage.getItem('selectedShow'));
const btnCompra = document.querySelector('#btn-compra');

// Verificar si hay datos disponibles
document.addEventListener('DOMContentLoaded', () => {
    ///////////////////////////////////////
    const selectedShow = JSON.parse(localStorage.getItem('selectedShow'));
    const btnCompra = document.querySelector('#btn-compra');
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    const comprarEntradas = document.getElementById("comprarEntradas");
    const entradasDisponibles = document.getElementById('entradas-disponibles');
    //////////////////////////////////////////
    if (selectedShow) {
        console.log(selectedShow); // Agrega esta línea para verificar los datos del evento seleccionado
        document.querySelector('.banda-evento').src = selectedShow.imagenSrc;
        document.querySelector('.titulo-evento').textContent = selectedShow.nombre;
        document.querySelector('.lugar-evento').textContent = `Lugar: ${selectedShow.lugar}`;
        document.querySelector('.fecha-evento').textContent = `Fecha: ${selectedShow.fecha}`;
        document.querySelector('.hora-evento').textContent = `Hora: ${selectedShow.hora}`;
        document.querySelector('.direccion-evento').textContent = `Direccion: ${selectedShow.direccion}`;

        document.querySelector('.mapa iframe').src = selectedShow.mapa;

        // Define la fecha y hora del evento seleccionado
        const [dia, mes, año] = selectedShow.fecha.split('-');
        const fechaHoraString = `${año}-${mes}-${dia}T${selectedShow.hora}:00`;
        const fechaHoraEvento = new Date(fechaHoraString).getTime();
        console.log('Fecha y hora del evento:', new Date(fechaHoraEvento)); // Agrega esta línea para verificar la fecha y hora del evento

        // Iniciar el temporizador con la fecha y hora del evento seleccionado
        iniciarTemporizador(fechaHoraEvento);
    } else {
        document.querySelector('.contenedor-evento').innerHTML = '<p>No hay información disponible para este evento.</p>';
    }

    btnCompra.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado de anclar el enlace
        modal.style.display = "block";
    });

    span.onclick = () => {
        modal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    comprarEntradas.addEventListener('click', () => {
        const tipoEntrada = document.getElementById('tipoEntrada').value;
        const cantidadEntradas = document.getElementById('cantidadEntradas').value;
        alert(`Compraste ${cantidadEntradas} entrada en el sector ${tipoEntrada}`);
        modal.style.display = "none";
    });

    function iniciarTemporizador(fechaEvento) {
        const countdownElement = document.getElementById('countdown-timer');

        const interval = setInterval(() => {
            const ahora = new Date().getTime();
            const tiempoRestante = fechaEvento - ahora;

            if (tiempoRestante < 0) {
                clearInterval(interval);
                countdownElement.textContent = "El evento ya comenzó";
                btnCompra.style.display = "none"; // Ocultar el botón comprar
                entradasDisponibles.textContent = "El evento ya concluyó, no es posible vender entradas"; // Cambiar el texto
                return;
            }

            const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
            const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

            countdownElement.textContent = `Faltan: ${dias} días | ${horas} horas | ${minutos} minutos | ${segundos} segundos`;
        }, 1000);
    }
});