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

  insert(value) {
    // instantiate a new node to add to our linkedlist
    let node = new Node(value);

    // check if there is already a head
    if (!this.head) {
      this.head = node;
    } else {
      // if not, set new node's next to the current head node
      node.next = this.head;
      // then set the head to the new node
      this.head = node;
    }
    return this;
  }

  includes(value) {
    // set indexor to head
    let current = this.head;
    // check head node
    if (current.value === value) {
      return true;
    } else {
      while (current.next) {
        // check middle nodes
        if (current.value === value) return true;
        current = current.next;
      }
      // check last node
      if (current.value === value) return true;
      return false;
    }
  }

  toString() {
    let current = this.head;
    let string = `{ ${current.value} `;
    while (current.next) {
      current = current.next;
      string += `} => { ${current.value} `;
    }
    string += '} => NULL';
    return string;
  }
}

module.exports = LinkedList;
