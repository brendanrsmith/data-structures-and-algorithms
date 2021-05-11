'use strict';

const Tree = require('../tree');

describe('BREADTH-FIRST', () => {

  it('should successfully return a collection from a breadth-first traversal', () => {
    let bt = new Tree.BT();
    bt.add(1);
    bt.add(2);
    bt.add(3);
    bt.add(4);
    bt.add(5);
    expect(bt.breadthFirst()).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return null on bad input', () => {
    let bt = new Tree.BT();
    expect(bt.breadthFirst()).toEqual(null);
  });

});
