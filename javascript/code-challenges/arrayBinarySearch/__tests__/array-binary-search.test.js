'use strict';

const { binarySearch } = require('../array-binary-search');

describe('Array Binary Search:', () => {

  it('should find index of present key', () => {
    const test = binarySearch([4,8,15,16,23,42], 15);
    expect(test).toEqual(2);
  });

  it('should return -1 for unfound key', () => {
    const test = binarySearch([11,22,33,44,55,66,77], 90);
    expect(test).toEqual(-1);
  });

  it('should return -1 for unfound key', () => {
    const test = binarySearch([1, 2, 3, 5, 6, 7], 4);
    expect(test).toEqual(-1);
  });
});
