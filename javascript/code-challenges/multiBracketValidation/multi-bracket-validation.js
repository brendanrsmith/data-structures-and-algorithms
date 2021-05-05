'use strict';

const {Stack} = require('../../stacksAndQueues/stacks-and-queues.js');

function multiBracketValidation(input) {

  let stack = new Stack();

  // iterate through input string
  for (let i = 0; i < input.length; i++) {
    let current = input[i];
    // check for opening braces, push them to stack
    if (current === '(' || current === '[' || current === '{') {
      stack.push(current);
      // check for closing braces,
    } else if (current === ')' || current === ']' || current === '}') {
      // check if stack is empty (mis-match)
      if (stack.isEmpty()) return false;
      // pop most recent opening brace from stack
      let prev = stack.pop();
      // check it against the current closing brace
      if (prev === '(' && current !== ')') return false;
      if (prev === '[' && current !== ']') return false;
      if (prev === '{' && current !== '}') return false;
    }
  }
  // Check if stack still has any values left
  if (stack.isEmpty()) {
    return true;
  } else {
    // if it does, mis-matched braces, return false
    return false;
  }
}

module.exports = multiBracketValidation;
