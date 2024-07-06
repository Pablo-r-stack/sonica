import auth from "./modules/auth.js";
import { apiUrl, conexionApi } from './modules/conexionApi.js';

const listaEventos = document.querySelector('.event-list ul');

document.addEventListener('DOMContentLoaded', async () => {
    if (!auth.checkAuth() || !auth.checkRol('Organizador')) {
        window.location.href = 'index.html';
    }
    await cargarDatos();
    initializeModal();
});

const cargarDatos = async () => {
    const eventos = await conexionApi.eventosOrganizador();
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
}

const initializeModal = () => {
    const modal = document.getElementById("modal");
    const closeModal = document.getElementsByClassName("close")[0];
    const modifyButtons = document.getElementsByClassName("modificar-btn");

    Array.from(modifyButtons).forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    closeModal.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

