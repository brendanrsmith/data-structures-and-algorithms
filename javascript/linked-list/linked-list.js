'use strict';

const LinkedList = require('./lib/ll');

let LL = new LinkedList();

console.log(LL);

LL.insert(10);

console.log(LL);

LL.insert(20);
LL.insert(30);
LL.append(40);

console.log(LL);

console.log(LL.includes(10));
console.log(LL.includes(20));
console.log(LL.includes(30));
console.log(LL.includes(40));

console.log(LL.toString());
