// Función para establecer el tema basado en la preferencia del sistema
const setTheme = () => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute('data-bs-theme', prefersDarkScheme ? 'dark' : 'light');
};

// Función para cambiar la imagen de perfil según el tema
const updateProfileImage = () => {
    const profileImage = document.getElementById('profile-image');
    const isDarkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    profileImage.src = isDarkMode ? 'IMG/Angel Sánchez B.png' : 'IMG/Angel Sánchez N.png';
};

// Configurar el tema al cargar la página
setTheme();
updateProfileImage(); // Asegurarse de que la imagen sea correcta al inicio

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    setTheme();
    updateProfileImage(); // Actualizar la imagen si el sistema cambia el tema
});

// Cambiar entre modo claro y oscuro manualmente
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    updateProfileImage(); // Actualizar la imagen al cambiar el tema manualmente
});
   