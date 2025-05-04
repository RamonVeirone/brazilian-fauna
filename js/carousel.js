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