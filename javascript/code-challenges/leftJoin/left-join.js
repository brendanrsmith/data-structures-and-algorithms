'use strict';

const Hashmap = require('../../hashtable/hashtable');

const leftJoin = (map1, map2) => {

  let map = new Hashmap(map1.size);

  map1.storage.forEach(element => {
    const key = element.head.val[0];
    const left = map1.get(key);
    let right = '';

    if (map2.contains(key)) {
      right = map2.get(key);
    } else right = 'NULL';

    map.add(key, { left, right });
  });

  return map;
};

module.exports = leftJoin;

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

console.log(

  leftJoin(syn, ant)
);
