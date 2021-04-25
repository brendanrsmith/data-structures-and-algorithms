'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // instantiate a new node to add to our linkedlist
    let node = new Node(value);

    // check if there is already a head
    if (!this.head) {
      this.head = node;
    } else {
      // if not, traverse the list from head to tail
      let current = this.head;

      while (current.next) {
        // while the current node has a .next property, go to the next thing
        current = current.next;
      }
      // set our node to the next of the last item in the list
      current.next = node;
    }
    
    return this;
  }
}

module.exports = LinkedList;
