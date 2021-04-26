'use strict';

const LinkedList = require('./lib/ll');

let LL = new LinkedList();



console.log(LL);

LL.insert(1);
LL.append(3);
LL.append(2);

console.log(LL.toString());

LL.insertAfter(4,5);

console.log(LL.toString());


module.exports = LinkedList;
