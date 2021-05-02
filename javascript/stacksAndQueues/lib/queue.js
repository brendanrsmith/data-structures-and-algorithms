'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
      return this;
    } else {
      this.rear.next = node;
      this.rear = node;
      return this;
    }
  }

  dequeue() {
    if (this.isEmpty()) return 'queue is empty';

    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;

    return temp.value;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    if (this.front === null) return true;
    else return false;
  }
}

module.exports = Queue;
