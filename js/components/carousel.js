import { createAnimalCard } from './animal-card.js';

export function createCarousel(animals) {
    const carouselInner = animals.map(animal => 
        createAnimalCard(animal.name, animal.image, animal.description)
    ).join('');
    return `
        <div class="carousel">
            <button class="prev">Anterior</button>
            <div class="carousel-inner">${carouselInner}</div>
            <button class="next">Próximo</button>
        </div>
    `;
}

export function setupCarousel(carouselElement) {
    const inner = carouselElement.querySelector('.carousel-inner');
    const prevBtn = carouselElement.querySelector('.prev');
    const nextBtn = carouselElement.querySelector('.next');
    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            inner.scrollTo({
                left: inner.children[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < inner.children.length - 1) {
            currentIndex++;
            inner.scrollTo({
                left: inner.children[currentIndex].offsetLeft,
                behavior: 'smooth'
            });
        }
    });
}