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

  insertBefore(value, newVal) {
    try {
      // instantiate a new node to add to our linkedlist
      let node = new Node(newVal);
      // set indexer to head
      let current = this.head;
      // if current head is search value, insert new node at head position
      if (current.value === value) {
        node.next = this.head;
        this.head = node;
      } else {
        // let a previous variable
        let previous = this.head;
        current = current.next;
        // search for value in list
        while (current.next) {
          if (current.value === value) {
            // if value found, set node.next to current
            node.next = current;
            // then, set previous to point at new node
            previous.next = node;
            break;
          }
          current = current.next;
          previous = previous.next;
        }
        // check last node
        if (current.value === value) {
          node.next = current;
          previous.next = node;
        } else {
          throw 'Exception';
        }
      }
    } catch (error) {
      console.error(error);
      return error;
    }
    return this;
  }

  insertAfter(value, newVal) {
    try {
      // instantiate a new node to add to our linkedlist
      let node = new Node(newVal);
      // set indexer to head
      let current = this.head;
      // if current head is search value, insert new node after head position
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
      } else {
        // let a previous variable
        current = current.next;
        // search for value in list
        while (current.next) {
          if (current.value === value) {
            // if value found, set node.next to point at current.next
            node.next = current.next;
            // then set current.next to point at new node
            current.next = node;
            break;
          }
          current = current.next;
        }
        // check last node
        if (current.value === value) {
          current.next = node;
        } else {
          throw 'Exception';
        }
      }
    } catch (error) {
      console.error(error);
      return error;
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

  kthFromEnd(k) {
    if (k < 0) return 'Exception';
    let counter = 1;
    let current = this.head;
    while (current.next) {
      counter += 1;
      current = current.next;
    }
    let kIndex = counter - k;
    let index = 1;
    let item = this.head;
    if (kIndex < 0) return 'Exception';
    while (index < kIndex) {
      item = item.next;
      index += 1;
    }
    return item.value;
  }
}

module.exports = LinkedList;
