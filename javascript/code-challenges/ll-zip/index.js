const LinkedList = require('../../linked-list');
const zipLists = require('../ll-zip/ll-zip');

let list1 = new LinkedList();
let list2 = new LinkedList();


list1.append(1);
list1.append(3);
list1.append(2);

list2.append(5);
list2.append(9);
list2.append(4);

let ans = zipLists(list1, list2);
console.log(ans);
