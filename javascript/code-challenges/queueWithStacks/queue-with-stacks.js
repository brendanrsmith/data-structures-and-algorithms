'use strict';

// algorithm adapted from https://www.geeksforgeeks.org/queue-using-stacks/

const { Stack } = require('../../stacksAndQueues/stacks-and-queues.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this.stack1.top;
  }

  dequeue() {
    if (this.stack1.peek() === 'empty stack' && this.stack2.peek() === 'empty stack') {
      return 'empty pseudoQueue';
    }
    if (this.stack2.peek() === 'empty stack') {
      // 'flip' stack one, then pop the bottom value off the top of stack 2
      while (this.stack1.peek() !== 'empty stack') {
        const item = this.stack1.pop();
        this.stack2.push(item);
      }
      // get return value from the top of stack 2 (aka bottom of stack 1)
      const returnVal = this.stack2.pop();

      // put everything back in stack1
      while (this.stack2.peek() !== 'empty stack') {
        const item = this.stack2.pop();
        this.stack1.push(item);
      }
      return returnVal;
    }

  }
}

module.exports = PseudoQueue;
