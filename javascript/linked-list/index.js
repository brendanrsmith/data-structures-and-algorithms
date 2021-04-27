'use strict';

const LinkedList = require('./lib/ll');

let LL = new LinkedList();



console.log(LL);

LL.insert(1);
LL.append(3);
LL.append(8);
LL.append(2);

console.log(LL.toString());

console.log(LL.kthFromEnd(6));




module.exports = LinkedList;
