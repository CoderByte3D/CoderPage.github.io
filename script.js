// script.js
// Archivo base listo para completar según las funciones que quieras.
// Ahora mismo incluye animaciones suaves, menú responsive y scroll.

// --- Animación suave al hacer scroll ---
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const section = document.querySelector(link.getAttribute('href'));
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });
});

// --- Menú Responsive ---
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// --- Animación de aparición al hacer scroll ---
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// --- Aquí puedo añadir más funciones ---
// Ejemplos:
// - Carrusel de productos
// - Galería interactiva
// - Animaciones 3D
// - Enviar formulario por email
// - Efectos de luz neon al pasar el ratón
// Sólo dime qué quieres y te lo añado.
