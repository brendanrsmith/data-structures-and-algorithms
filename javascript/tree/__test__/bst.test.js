'use strict';

const Tree = require('../tree.js');

describe('BINARY TREE', () => {

  let one = new Node(1);
  let two = new Node(2);
  let three = new Node(3);
  let four = new Node(4);
  let five = new Node(5);
  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;
  let bt = new Tree.BT(one);

  it('Can successfully instantiate an empty tree', () => {
    expect(bt).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    bt.
  });

  it('Can successfully add a left child and right child to a single root node', () => {

  });

  it('Can successfully return a collection from a preorder traversal', () => {

  });

  it('Can successfully return a collection from an inorder traversal', () => {

  });

  it('Can successfully return a collection from a postorder traversal', () => {

  });
});

describe('BINARY SEARCH TREE', () => {
  it('should ', () => {

  });
});
