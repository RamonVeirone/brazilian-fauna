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
  const slides = inner.querySelectorAll('.animal-card');
  let currentIndex = 0;

  function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      inner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateCarousel();
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateCarousel();
      }
  });
  updateCarousel();
}