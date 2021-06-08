class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);

    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    let result = [];

    while (current) {
      // console.log(current.val);
      result.push(current.val);
      current = current.next;
    }
    return result;
  }
}


class Hashmap {
  // hash maps need:
  // - pre determined storage mechanism size
  // - storage mechanism -> array
  // - a constructor that creates that new storage mechanism
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  // provides a hash for a given key
  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  // add a new key/val pair into our hashmap
  add(key, val) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  // retreive a value given a key from our hashmap
  get(key) {
    let hash = this.hash(key);

    if (this.storage[hash]) {

      const hashTable = this.storage[hash].getList();
      const value = hashTable.filter(element => element[0] === key.toString());
      if (value[0]){
        return value[0][1];
      } else return 'not found';
    } return 'not found';
  }

  contains(key) {
    let hash = this.hash(key);

    if (this.storage[hash]) {

      const hashTable = this.storage[hash].getList();
      const value = hashTable.filter(element => element[0] === key.toString());
      if (value[0]){
        return true;
      } else return false;
    }
    return false;
  }

}

// let hashmap = new Hashmap(3);
// hashmap.add('brian', 'nations');
// console.log(hashmap);
// hashmap.add('alex', 'samson');
// hashmap.add('alexx', 'xsbbis');
// hashmap.add('tom', 'thomson');
// hashmap.add('sarah', 'harrasas');

// console.log(hashmap.contains('alfdsaex'));

module.exports = Hashmap;
