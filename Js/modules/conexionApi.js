import auth from "./auth.js";

export const apiUrl = 'http://localhost:3000';

const consultarApi = async (url, opciones = {}) => {
    const respuesta = await fetch(url, opciones);
    if (!respuesta.ok) {
        throw new Error(`HTTP error! Status: ${respuesta.status}`);
    }
    return await respuesta.json();
};

const login = async (params) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include', // Indica que incluya las credenciales en la solicitud (incluyendo cookies)
        body: JSON.stringify(params),
    };
    try {
        const respuesta = await fetch(`${apiUrl}/usuario/login`, opciones);
        const datos = await respuesta.json();
        if(datos.access_token){
            auth.login(datos.access_token);
        }
        return datos;
    } catch (error) {
        console.error('Error en login:', error);
        throw error; // Re-lanza el error para manejarlo en enviarDatos
    }
}

const registro = async (params) => {
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    };
    try {
        const respuesta = await consultarApi(`${apiUrl}/usuario/register`, opciones);
        return respuesta; // Devuelve la respuesta para manejarla en enviarDatos
    } catch (error) {
        console.error('Error en registro:', error);
        throw error; // Re-lanza el error para manejarlo en enviarDatos
    }
};




export const conexionApi = {
    consultarApi, login, registro
}