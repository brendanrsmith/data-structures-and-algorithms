'use strict';

const Queue = require('../lib/queue.js');

describe('Queue', () => {
  it('should successfully instantiate a new queue', () => {
    let queue = new Queue;
    expect(queue.front).toEqual(null);
  });
});
