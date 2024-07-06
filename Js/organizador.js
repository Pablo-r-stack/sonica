import auth from "./modules/auth.js";
import { apiUrl, conexionApi } from './modules/conexionApi.js';


const listaEventos = document.querySelector('.event-list ul');

document.addEventListener('DOMContentLoaded', async() => {
    if (!auth.checkAuth() || !auth.checkRol('Organizador')) {
        window.location.href = 'index.html';
    }
    await cargarDatos();
});

const cargarDatos = (async()=>{
    const  eventos = await conexionApi.eventosOrganizador();
    console.log(eventos);
    eventos.forEach(evento => {
        const item = document.createElement('li');
        item.classList.add('event-item');
        item.innerHTML = `
        <span>${evento.titulo}</span>
        <button class="btn-contacto modificar-btn" value="${evento.id}">Modificar</button>
        <button class="btn-contacto" value="${evento.id}">Eliminar</button>
        `; 
        listaEventos.appendChild(item);       
    });
})