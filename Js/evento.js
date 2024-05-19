 // Recuperar los datos del local storage
 const selectedShow = JSON.parse(localStorage.getItem('selectedShow'));

 // Verificar si hay datos disponibles
 if (selectedShow) {
     document.querySelector('.banda-evento').src = selectedShow.imagenSrc;
     document.querySelector('.titulo-evento').textContent = selectedShow.nombre;
     document.querySelector('.lugar-evento').textContent = `Lugar: ${selectedShow.lugar}`;
     document.querySelector('.fecha-evento').textContent = `Fecha: ${selectedShow.fecha}`;
 } else {
     // Manejar el caso en que no hay datos disponibles
     document.querySelector('.contenedor-evento').innerHTML = '<p>No hay información disponible para este evento.</p>';
 }