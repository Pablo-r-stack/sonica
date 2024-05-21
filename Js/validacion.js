const formulario = document.querySelector('form');
const campos = formulario.querySelectorAll('input, textarea, select');
const msgValidacion = document.querySelector('#mensajeValidacion')
//eventos
campos.forEach((campo) => {
    campo.addEventListener('keydown', (e) => {
        const mensajeError = msgValidacion.querySelector('small');
        if (mensajeError && mensajeError.classList.contains('mensaje-error')) {
            mensajeError.remove();
            msgValidacion.style.visibility = 'hidden';
        }
        campo.style.border = '';
        if (campo.type === 'email' || campo.type === 'password') {
            const caracteresProhibidos = /[#!=:& /()[\]]/;
            const caracter = e.key;

            if (caracteresProhibidos.test(caracter)) {
                e.preventDefault(); // Prevenir la entrada del carácter
                campo.style.border = '2px solid red';
                agregarMensaje("No se pueden ingresar los siguientes caracteres especiales: #!&/()");
            }
        }
    })
    if (campo.tagName.toLocaleLowerCase() === 'select') {
        campo.addEventListener('click', () => {
            const mensajeError = msgValidacion.querySelector('small');
            if (mensajeError && mensajeError.classList.contains('mensaje-error')) {
                mensajeError.remove();
                msgValidacion.style.visibility = 'hidden';
            }
            campo.style.border = '';
        })
    }
})
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validarCampos(campos)) {
        enviarDatos(campos);
    }
})
//funcion validacion campos previo a envio de formulario
const validarCampos = (campos) => {
    let valido = true;
    const contrasena = formulario.querySelector('input[id="password"]');
    const contrasena2 = formulario.querySelector('input[id="password2"]');
    // Eliminar mensajes de error existentes y restablecer el estilo del borde
    campos.forEach((campo) => {
        const mensajeError = campo.nextElementSibling;
        if (mensajeError && mensajeError.classList.contains('mensaje-error')) {
            mensajeError.remove();
        }
        campo.style.border = '';
        if (campo.value.trim() === '') {
            campo.style.border = '2px solid red';
            valido = false;
        }
    })
    if(contrasena && contrasena2){
        if(contrasena.value !== contrasena2.value){
            contrasena2.style.border = '2px solid red';
            valido = false;
            agregarMensaje('Las contraseñas no coinciden');
        }
    }
    if (!valido) {
        agregarMensaje('Todavía hay campos vacíos');
    }
    return valido;
}

const agregarMensaje = (mensaje) => {
    const mensajeError = document.createElement('small');
    mensajeError.classList.add('mensaje-error');
    mensajeError.textContent = `${mensaje}`;
    msgValidacion.appendChild(mensajeError);
    msgValidacion.style.visibility = 'visible';
}


//funcion envio de formulario
const enviarDatos = (campos) => {
    const mensaje = {};
    campos.forEach((campo) => {
        mensaje[campo.id] = campo.value.trim();
    });
    alert(`Este mensaje se enviara proximamente${JSON.stringify(mensaje)}`);
}