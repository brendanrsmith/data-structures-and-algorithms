'use strict';

const Hashmap = require('../hashtable');

describe('HASH TABLE', () => {

  it('can create an empty hash table', () => {
    let hashmap = new Hashmap(3);
    expect(hashmap).toBeDefined();
  });

  it('can add a value to a new hash table', () => {
    let hashmap = new Hashmap(3);
    hashmap.add('brian', 'nations');
    expect(hashmap.storage).toBeDefined();
  });

  it('can retreive a value from a hash table', () => {
    let hashmap = new Hashmap(3);
    hashmap.add('brian', 'nations');
    expect(hashmap.get('brian')).toBe('nations');
    expect(hashmap.get('susan')).toBe('not found');
  });

  it('can check a table for a value using contains()', () => {
    let hashmap = new Hashmap(3);
    hashmap.add('brian', 'nations');
    expect(hashmap.contains('brian')).toBe(true);
    expect(hashmap.contains('susan')).toBe(false);
  });

});
