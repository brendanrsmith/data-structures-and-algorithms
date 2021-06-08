'use strict';

const Hashmap = require('../../../hashtable/hashtable');

const leftJoin = require('../left-join');

describe('LEFT JOIN', () => {

  it('should create a new hash table when called', () => {
    let syn = new Hashmap(10);
    syn.add('a', '1');
    syn.add('b', '2');
    syn.add('c', '3');
    syn.add('d', '4');

    let ant = new Hashmap(10);
    expect(leftJoin(syn, ant).size).toEqual(10);
  });

  it('should merge a filled left table with empty right table', () => {
    let syn = new Hashmap(10);
    syn.add('a', '1');
    syn.add('b', '2');
    syn.add('c', '3');
    syn.add('d', '4');

    let ant = new Hashmap(10);
    expect(leftJoin(syn, ant).get('a')).toEqual({ 'left': '1', 'right': 'NULL' });
  });

  it('should merge a filled left table with a filled right table', () => {
    let syn = new Hashmap(10);
    syn.add('a', '1');
    syn.add('b', '2');
    syn.add('c', '3');
    syn.add('d', '4');

    let ant = new Hashmap(10);
    ant.add('a', '10');
    ant.add('b', '20');
    ant.add('c', '30');
    ant.add('e', '40');

    expect(leftJoin(syn, ant).get('a')).toEqual({ 'left': '1', 'right': '10' });
  });

  it('should not merge a right key that is not present in left table', () => {
    let syn = new Hashmap(10);
    syn.add('b', '2');
    syn.add('c', '3');
    syn.add('d', '4');

    let ant = new Hashmap(10);
    ant.add('a', '10');
    ant.add('b', '20');
    ant.add('c', '30');
    ant.add('e', '40');

    expect(leftJoin(syn, ant).get('a')).toEqual('not found');
  });
});
