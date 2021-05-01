'use strict';

const Stack = require('../lib/stack.js');

describe('STACK', () => {
  it('should successfully instantiate a new stack', () => {
    let stack = new Stack;
    expect(stack.top).toEqual(null);
  });
});
