'use strict';

const Node = require('../node');
const Tree = require('../tree');

describe('FIND-MAXIMUM-VALUE', () => {

  it('Should find maximum value in a tree with a single node', () => {
    const one = new Node(1);
    const bt = new Tree.BT(one);
    expect(bt.findMaximumValue()).toBe(1);
  });

  it('Should return NULL on an empty tree', () => {
    const bt = new Tree.BT();
    expect(bt.findMaximumValue()).toBe(null);
  });

  it('Should find maximum value in a tree with a multiple nodes', () => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    one.left = two;
    one.right = three;
    const bt = new Tree.BT(one);
    expect(bt.findMaximumValue()).toBe(3);
  });

  it('Should find maximum value in a tree with a negative nodes', () => {
    const one = new Node(1);
    const two = new Node(-2);
    const three = new Node(-3);
    one.left = two;
    one.right = three;
    const bt = new Tree.BT(one);
    expect(bt.findMaximumValue()).toBe(1);
  });
});

