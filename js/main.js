import { createCarousel } from './components/carousel.js';
import { aves, mamiferos, peixes } from './data/animals.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#aves .carousel').innerHTML = createCarousel(aves);
  document.querySelector('#mamiferos .carousel').innerHTML = createCarousel(mamiferos);
  document.querySelector('#peixes .carousel').innerHTML = createCarousel(peixes);
});