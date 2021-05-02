'use strict';

const Stack = require('../lib/stack.js');

describe('STACK', () => {
  it('should successfully instantiate a new stack', () => {
    let stack = new Stack;
    expect(stack.top).toEqual(null);
  });

  it('Can successfully push onto a stack', () => {
    let stack = new Stack;
    stack.push('test');
    expect(stack.top.value).toEqual('test');
  });

  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack;
    stack.push('test1');
    stack.push('test2');
    expect(stack.top.value).toEqual('test2');
  });

  it('Can successfully pop off the stack', () => {
    let stack = new Stack;
    stack.push('test1');
    stack.push('test2');
    expect(stack.top.value).toEqual('test2');
    expect(stack.pop()).toEqual('test2');
  });

  it('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack;
    stack.push('test1');
    stack.push('test2');
    stack.pop();
    stack.pop();
    expect(stack.top).toBe(null);
  });

  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack;
    stack.push('test1');
    stack.push('test2');
    stack.push('test3');
    expect(stack.peek()).toBe('test3');
  });

  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack;
    expect(stack.peek()).toBe('empty stack');
    expect(stack.pop()).toBe('empty stack');
  });

});
