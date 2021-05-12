'use strict';

const { BT } = require('../../tree/tree.js');
const Node = require('../../tree/node.js');
const fizzBuzzTree = require('./fizz-buzz-tree.js');


// manual testing
let one = new Node(1);
let three = new Node(3);
let five = new Node(5);
let two = new Node(2);
let six = new Node(6);
let fifteen = new Node(15);

one.left = three;
one.right = five;
three.left = two;
five.left = fifteen;
five.right = six;

let tree = new BT(one);
console.log(tree.preOrder());
fizzBuzzTree(tree);
console.log(tree.preOrder());
