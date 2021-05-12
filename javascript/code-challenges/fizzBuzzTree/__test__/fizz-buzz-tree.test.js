'use strict';

const Node = require('../../../tree/node');
const { BT } = require('../../../tree/tree');
const fizzBuzzTree = require('../fizz-buzz-tree');

describe('FIZZ-BUZZ-TREE', () => {
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

  it('should change a non-fizzbuzz number to a string', () => {
    const uno = new Node(1);
    const oneTree= new BT(uno);
    fizzBuzzTree(oneTree);
    expect(oneTree.inOrder()).toEqual(['1']);
  });

  it('should change 3 to "fizz"', () => {
    const uno = new Node(3);
    const oneTree= new BT(uno);
    fizzBuzzTree(oneTree);
    expect(oneTree.inOrder()).toEqual(['Fizz']);
  });

  it('should change 5 to "buzz"', () => {
    const uno = new Node(5);
    const oneTree= new BT(uno);
    fizzBuzzTree(oneTree);
    expect(oneTree.inOrder()).toEqual(['Buzz']);
  });

  it('should change 15 to "FizzBuzz"', () => {
    const uno = new Node(15);
    const oneTree= new BT(uno);
    fizzBuzzTree(oneTree);
    expect(oneTree.inOrder()).toEqual(['FizzBuzz']);
  });

  it('should traverse a tree correctly, altering all values', () => {
    fizzBuzzTree(tree);
    expect(tree.preOrder()).toEqual([ '1', 'Fizz', '2', 'Buzz', 'FizzBuzz', 'Fizz' ]);
  });

});
