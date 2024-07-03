// auth.js
const auth = {
    checkAuth() {
        return !!sessionStorage.getItem('token');
    },

    checkRol(rol){
        const session = sessionStorage.getItem('rol');
        if(session) return session == rol;
    },

    login(token, rol) {
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('rol', rol);
        this.updateNav();
    },

    logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('rol');
        this.updateNav();
        window.location.href = 'index.html';
    },

    updateNav() {
        const isLoggedIn = this.checkAuth();
        const navLinksContainer = document.querySelector('.navLinks');
        const fragmentPath = isLoggedIn ? '../templates/header-logged-in.html' : '../templates/header-logged-out.html';

        fetch(fragmentPath)
            .then(response => response.text())
            .then(html => {
                navLinksContainer.outerHTML = html;
                if (isLoggedIn) {
                    document.getElementById('logoutButton').addEventListener('click', () => this.logout());
                }
            })
            .catch(error => console.error('Error al cargar el fragmento:', error));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    auth.updateNav();
});

export default auth;
