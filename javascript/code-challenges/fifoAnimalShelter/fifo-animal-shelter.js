'use strict';

const { Queue } = require('../../stacksAndQueues/stacks-and-queues.js');

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      return this.dogs.enqueue(animal);
    } else if (animal.species === 'cat') {
      return this.cats.enqueue(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') return this.dogs.dequeue();
    if (pref === 'cat') return this.cats.dequeue();
    return('only dogs and cats available');
  }
}

class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

module.exports = { AnimalShelter, Animal };
