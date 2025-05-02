import { createAnimalCard } from './animal-card.js';

export function createCarousel(animals) {
  return `
    <div class="carousel">
      <button class="prev">Anterior</button>
      <div class="carousel-inner">
        ${animals.map(animal => createAnimalCard(animal.name, animal.image, animal.description)).join('')}
      </div>
      <button class="next">Próximo</button>
    </div>
  `;
}