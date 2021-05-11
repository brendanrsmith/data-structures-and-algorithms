'use strict';

const Node = require('./node.js');
const BT = require('./binary-tree.js');
const BST = require('./binary-search-tree.js');

// write a method for addItem that instatiates a node

let one = new Node(1);
let two = new Node(2);
let three = new Node(9);
let four = new Node(4);
let five = new Node(5);


one.left = two;
one.right = three;
three.left = four;
three.right = five;
// let bt = new BT(one);
// bt.add(one);
// console.log(bt);
// console.log(bt.findMaximumValue());
// let tree = new BST();

// tree.add(4);
// tree.add(1);
// tree.add(3);
// tree.add(8);
// tree.add(2);

module.exports = {
  BT,
  BST
};
