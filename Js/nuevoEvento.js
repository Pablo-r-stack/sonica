document.getElementById('nuevoEventoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const lugar = document.getElementById('lugar').value;
    const hora = document.getElementById('hora').value;
    const direccion = document.getElementById('direccion').value;
    const mapa = document.getElementById('mapa').value;
    const imagen = document.getElementById('imagen').value;

    const nuevoEvento = {
        nombre,
        fecha,
        lugar,
        hora,
        direccion,
        mapa,
        imagen
    };

    fetch('../banda.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.shows.push(nuevoEvento);

            return fetch('../banda.json', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        })
        .then(response => {
            if (response.ok) {
                alert('Evento creado con éxito!');
                window.location.reload();
            } else {
                alert('Error al crear el evento.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al crear el evento.');
        });
});
