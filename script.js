// script.js
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambia el slide automáticamente cada 4 segundos
setInterval(nextSlide, 4000);

// Inicializa el primer slide
showSlide(currentSlide);