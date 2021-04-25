'use strict';

const { it } = require('@jest/globals');
const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('Should create an empty LL on instantiation', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  })

  it('should add a node to the list', () => {
    
  })
});
