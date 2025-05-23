import { createCarousel, setupCarousel } from './components/carousel.js';
import { aves, mamiferos, peixes } from './data/animals.js';

document.addEventListener('DOMContentLoaded', () => {
    const avesCarousel = document.querySelector('#aves .carousel');
    const mamiferosCarousel = document.querySelector('#mamiferos .carousel');
    const peixesCarousel = document.querySelector('#peixes .carousel');

    if (avesCarousel && mamiferosCarousel && peixesCarousel) {
        avesCarousel.innerHTML = createCarousel(aves);
        mamiferosCarousel.innerHTML = createCarousel(mamiferos);
        peixesCarousel.innerHTML = createCarousel(peixes);

        setupCarousel(avesCarousel);
        setupCarousel(mamiferosCarousel);
        setupCarousel(peixesCarousel);
    } else {
        console.error("One or more carousel divs not found.");
    }
});