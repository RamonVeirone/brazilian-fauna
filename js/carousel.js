import { createAnimalCard } from './animal-cards.js';

export function createCarousel(animals, container) {
    const carouselHTML = `
        <div class="carousel">
            <button class="prev" aria-label="Animal anterior">Anterior</button>
            <div class="carousel-inner">
                ${animals.map(animal => createAnimalCard(animal.name, animal.image, animal.description)).join('')}
            </div>
            <button class="next" aria-label="Próximo animal">Próximo</button>
        </div>
    `;
    container.innerHTML += carouselHTML;

    const carousel = container.querySelector('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = inner.querySelector('.animal-card').offsetWidth + 10; // Largura + margem
        inner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === animals.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < animals.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    updateCarousel(); // Inicializa o carrossel
}