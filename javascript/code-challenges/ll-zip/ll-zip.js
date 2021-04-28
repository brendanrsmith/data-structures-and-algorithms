'use strict';

// require linked list
const LinkedList = require('../../linked-list');

function zipLists(list1, list2) {
  let zip = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 || current2) {
    if (current1) {
      zip.append(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      zip.append(current2.value);
      current2 = current2.next;
    }
  }
  return zip;
}

module.exports = zipLists;
