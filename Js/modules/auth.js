// auth.js
const auth = {
    checkAuth() {
        return !!localStorage.getItem('token');
    },

    login(token) {
        localStorage.setItem('token', token);
        this.updateNav();
    },

    logout() {
        localStorage.removeItem('token');
        this.updateNav();
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
