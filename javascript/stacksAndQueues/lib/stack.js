'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }

  pop() {
    if (this.top === null) return 'empty stack';

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    return temp.value;
  }

  peek() {
    if (this.top === null) return 'empty stack';

    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) return true;
    else return false;
  }
}

module.exports = Stack;
