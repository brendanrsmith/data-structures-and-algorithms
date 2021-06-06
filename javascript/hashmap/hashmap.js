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

    while (current) {
      console.log(current.val);
      current = current.next;
    }
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
  set(key, val) {
    let hash = this.hash(key);

    if (!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add(key, val);
    }
  }

  // retreive a value given a key from our hashmap
  get() {

  }

}

let hashmap = new Hashmap(3);

hashmap.set('brian', 'nations');
hashmap.set('alex', 'samson');
hashmap.set('alex', 'xsbbis');
hashmap.set('tom', 'thomson');
hashmap.set('sarah', 'harrasas');

console.log(hashmap);
