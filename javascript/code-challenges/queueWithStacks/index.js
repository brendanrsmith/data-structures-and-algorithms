'use strict';

const PseudoQueue = require('./queue-with-stacks.js');

const pseudo = new PseudoQueue;

pseudo.enqueue(1);
pseudo.enqueue(2);
pseudo.enqueue(3);

console.log(pseudo);
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo.dequeue());
console.log(pseudo);

