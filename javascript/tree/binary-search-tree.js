'use strict';

const Node = require('./node.js');

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const val = new Node(value);

    let _insert = (node, newVal) => {

      // if (node.value === value) return 'value already in tree';
      if (node.value > newVal.value) {
        if (!node.left) node.left = newVal;
        else _insert(node.left, newVal);
      }

      if (node.value < newVal.value) {
        if (!node.right) node.right = newVal;
        else _insert(node.right, newVal);
      }
    };

    if (this.root === null) {
      this.root = val; // if empty tree, set root to new node
      return this;
    }
    _insert(this.root, val); // instantiate recursion

  }

  contains(val) {
    let found = false;

    let _search = (node, value) => {
      if (node === null) return false;

      if (node.value > value) _search(node.left, value);
      else if (node.value < value) _search(node.right, value);
      else if (node.value === value) found = true;
    };

    _search(this.root, val);
    return found;
  }
}

module.exports = BinarySearchTree;




