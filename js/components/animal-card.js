export function createAnimalCard(name, image, description) {
  return `
      <div class="animal-card">
          <img src="js/assets/images/${image}" alt="${name}">
          <h3>${name}</h3>
          <p>${description}</p>
      </div>
  `;
}