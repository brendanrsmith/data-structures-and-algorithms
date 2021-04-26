'use strict';

const { it } = require('@jest/globals');
const LL = require('../lib/ll.js');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let list = new LL();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LL();
    list.insert('TEST');
    expect(list.head).toBeDefined();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LL();
    list.insert('TEST');
    expect(list.head.value).toEqual('TEST');
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insert('TEST2');
    list.insert('TEST3');
    expect(list.head.value).toEqual('TEST3');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insert('TEST2');
    list.insert('TEST3');
    expect(list.includes('TEST2')).toBe(true);
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insert('TEST2');
    list.insert('TEST3');
    expect(list.includes('TEST4')).toBe(false);
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insert('TEST2');
    list.insert('TEST3');
    expect(list.toString()).toMatch(/TEST2/);
  });

}),
describe('ll-insertions', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LL();
    list.append('TEST1');
    list.append('TEST2');
    expect(list.head.next.value).toEqual('TEST2');
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LL();
    list.append('TEST1');
    list.append('TEST2');
    list.append('TEST3');
    expect(list.head.next.next.value).toEqual('TEST3');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.append('TEST3');
    list.insertBefore('TEST3', 'TEST2');
    expect(list.head.next.value).toEqual('TEST2');
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insertBefore('TEST1', 'TEST0');
    expect(list.head.value).toEqual('TEST0');
  });

  it('Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.append('TEST2');
    list.append('TEST4');
    list.insertAfter('TEST2', 'TEST3');
    expect(list.head.next.next.value).toEqual('TEST3');
  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let list = new LL();
    list.insert('TEST1');
    list.insert('TEST0');
    list.insertAfter('TEST1', 'TEST2');
    expect(list.head.next.next.value).toEqual('TEST2');
  });
});
