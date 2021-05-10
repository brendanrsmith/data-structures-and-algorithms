'use strict';

const Tree = require('../tree.js');

describe('BINARY TREE', () => {

  it('Can successfully instantiate an empty tree', () => {
    let bt = new Tree.BT();
    expect(bt).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let bt = new Tree.BT(1);
    expect(bt).toBeDefined();
    expect(bt.root).toBe(1);
  });

  it('Can successfully add a left child and right child to a single root node', () => {
    let bt = new Tree.BT();
    bt.add(1);
    bt.add(2);
    bt.add(3);
    expect(bt.root.left.value).toBe(2);
    expect(bt.root.right.value).toBe(3);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let bt = new Tree.BT();
    bt.add(1);
    bt.add(2);
    bt.add(3);
    expect(bt.preOrder()).toEqual([1, 2, 3]);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let bt = new Tree.BT();
    bt.add(1);
    bt.add(2);
    bt.add(3);
    expect(bt.inOrder()).toEqual([2, 1, 3]);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let bt = new Tree.BT();
    bt.add(1);
    bt.add(2);
    bt.add(3);
    expect(bt.postOrder()).toEqual([2, 3, 1]);
  });
});
