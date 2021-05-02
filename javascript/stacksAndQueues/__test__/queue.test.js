'use strict';

const Queue = require('../lib/queue.js');

describe('Queue', () => {
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue;
    expect(queue.front).toEqual(null);
  });

  it('Can successfully enqueue into a queue', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    expect(queue.front.value).toEqual('test1');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    queue.enqueue('test2');
    queue.enqueue('test3');
    expect(queue.front.value).toEqual('test1');
    expect(queue.rear.value).toEqual('test3');
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    queue.enqueue('test2');
    queue.enqueue('test3');
    expect(queue.dequeue()).toEqual('test1');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    queue.enqueue('test2');
    queue.enqueue('test3');
    expect(queue.peek()).toEqual('test1');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    queue.enqueue('test2');
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue;
    queue.enqueue('test1');
    queue.enqueue('test2');
    queue.dequeue();
    queue.dequeue();
    expect(queue.peek()).toBe('empty queue');
  });
});
