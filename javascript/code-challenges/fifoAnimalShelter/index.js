'use strict';

const {AnimalShelter} = require('./fifo-animal-shelter.js');
const {Animal} = require('./fifo-animal-shelter.js');

let animalShelter = new AnimalShelter;

let toby = new Animal('cat', 'Toby');
let tiger = new Animal('cat', 'Tiger');
let spike = new Animal('dog', 'Spike');
let spot = new Animal('dog', 'Spot');

animalShelter.enqueue(toby);
animalShelter.enqueue(tiger);
animalShelter.enqueue(spike);
animalShelter.enqueue(spot);

console.log(animalShelter);

console.log(animalShelter.dequeue('cat'));
console.log(animalShelter.dequeue('dog'));
console.log(animalShelter.dequeue('dog'));
console.log(animalShelter.dequeue('dog'));
