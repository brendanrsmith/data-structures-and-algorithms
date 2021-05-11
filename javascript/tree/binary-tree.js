'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root = null) {
    this.root = root; // if no arg passed, create empty tree
  }

  add(value) {
    const newNode = new Node(value);
    let _add = (value, root) => {
      if (!root) root = newNode;
      if (!root.left) root.left = newNode;
      else if (!root.right) root.right = newNode;
      else _add(value, root.left);
    };
    if (this.root === null) {
      this.root = newNode; // if empty tree, set root to new node
      return this;
    }
    _add(value, this.root);
    return this;
  }

  preOrder() {
    // Data, left, right
    let results = [];

    let _walk = node => {
      results.push(node.value); // Add data to results array
      if (node.left) _walk(node.left); // walk left on tree until leaf
      if (node.right) _walk(node.right); // walk right on tree until leaf
    };

    _walk(this.root); // kicks off recursive fn()
    return results; // reutrn filled results array to user
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left); // Left,
      results.push(node.value); // Data,
      if (node.right) _walk(node.right); // Right
    };

    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left); // Left,
      if (node.right) _walk(node.right); // Right,
      results.push(node.value); // Data
    };

    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    let maxVal = 0;
    if (!this.root) return null;

    let _walk = node => {
      if (node.value > maxVal) maxVal = node.value;
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return maxVal;
  }

  breadthFirst() {
    if (!this.root) return null;
    let results = [];

    let queue = [this.root]; // create a queue object containing the root node

    while (queue.length > 0) { // while the queue contains nodes:
      let current = queue.shift(); // set current node
      results.push(current.value); // push current value to results array

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return results;
  }
}

module.exports = BinaryTree;
