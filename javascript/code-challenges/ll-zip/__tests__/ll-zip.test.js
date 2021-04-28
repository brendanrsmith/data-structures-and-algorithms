'use strict';

const LinkedList = require('../../../linked-list/index.js');
const zip = require('../ll-zip.js');

describe('ll-zip', () => {
  it('should properly zip two equal length lists', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    expect(zip(list1, list2)).toBeTruthy;
    expect(zip(list1, list2).kthFromEnd(0)).toBe(4);
    expect(zip(list1, list2).kthFromEnd(6)).toBe(1);
  });

  it('should properly zip two unequal length lists', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    expect(zip(list1, list2)).toBeTruthy;
    expect(zip(list1, list2).kthFromEnd(0)).toBe(4);
    expect(zip(list1, list2).kthFromEnd(5)).toBe(1);
  });

  it('should properly zip two equal length lists', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);
    let list2 = new LinkedList();
    list2.append(5);
    list2.append(9);

    expect(zip(list1, list2)).toBeTruthy;
    expect(zip(list1, list2).kthFromEnd(0)).toBe(2);
    expect(zip(list1, list2).kthFromEnd(5)).toBe(1);
  });
});

