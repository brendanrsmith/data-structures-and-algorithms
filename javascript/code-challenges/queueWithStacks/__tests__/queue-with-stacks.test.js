'use strict';

const PseudoQueue = require('../queue-with-stacks.js');


describe('pseudoQueue', () => {
  it('should properly enqueue a new value', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    expect(pseudo.stack1.peek()).toEqual(1);
  });

  it('should properly enqueue multiple values', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    expect(pseudo.stack1.peek()).toEqual(3);
  });

  it('should properly dequeue a value', () => {
    let pseudo = new PseudoQueue();
    pseudo.enqueue(1);
    pseudo.enqueue(2);
    pseudo.enqueue(3);
    expect(pseudo.dequeue()).toEqual(1);
  });

  it('should return an exception when dequeue called on empty pseudoQueue', () => {
    let pseudo = new PseudoQueue();
    expect(pseudo.dequeue()).toEqual('empty pseudoQueue');
  });
});
