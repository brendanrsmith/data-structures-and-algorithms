'use strict';


const {AnimalShelter} = require('../fifo-animal-shelter.js');
const {Animal} = require('../fifo-animal-shelter.js');

let animalShelter = new AnimalShelter;

let toby = new Animal('cat', 'Toby');
let tiger = new Animal('cat', 'Tiger');
let spike = new Animal('dog', 'Spike');
let spot = new Animal('dog', 'Spot');

describe('ANIMAL SHELTER', () => {
  it('should enqueue a new animal to the shelter', () => {
    animalShelter.enqueue(toby);
    expect(animalShelter.cats.peek()).toBe(toby);
  });

  it('should enqueue multiple animals to the shelter', () => {
    animalShelter.enqueue(tiger);
    animalShelter.enqueue(spike);
    animalShelter.enqueue(spot);
    expect(animalShelter.cats.peek()).toBe(toby);
    expect(animalShelter.dogs.peek()).toBe(spike);
  });

  it('should dequeue an animal from the shelter', () => {
    expect(animalShelter.dequeue('cat')).toBe(toby);
  });

  it('should dequeue multiple animals from the shelter', () => {
    animalShelter.dequeue('dog');
    expect(animalShelter.dequeue('dog')).toBe(spot);
  });

  it('should return error if shelter is empty', () => {
    expect(animalShelter.dequeue('dog')).toBe('empty queue');
  });

  it('should return error if preference is not dog or cat', () => {
    expect(animalShelter.dequeue('turtle')).toBe('only dogs and cats available');
  });

});

