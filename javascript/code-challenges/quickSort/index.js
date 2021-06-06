'use strict';

const quickSort = require('./quick-sort');

let arr = [8,4,23,42,16,15];
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log(arr);


let arr2 = [ 4, 8, 15, 16, 23, 42 ];
console.log(arr2);
quickSort(arr2, 0, arr2.length - 1);
console.log(arr2);
