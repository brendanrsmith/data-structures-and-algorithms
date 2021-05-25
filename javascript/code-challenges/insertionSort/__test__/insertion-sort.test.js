'use strict';

const insertionSort = require('../insertion-sort');

describe('INSERTION SORT', () => {

  it('should correctly return a sorted array', () => {
    let arr = [ 4, 8, 15, 16, 23, 42 ];
    expect(insertionSort(arr)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  it('should correctly return an unsorted array', () => {
    let arr = [8,4,23,42,16,15];
    expect(insertionSort(arr)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  it('should correctly return a reversed array', () => {
    let arr = [20,18,12,8,5,-2];
    expect(insertionSort(arr)).toEqual([-2,5,8,12,18,20]);
  });

  it('should correctly return an array containing duplicate values', () => {
    let arr = [5,12,7,5,5,7];
    expect(insertionSort(arr)).toEqual([5,5,5,7,7,12]);
  });

  it('should correctly return a nearly sorted array', () => {
    let arr = [2,3,5,7,13,11];
    expect(insertionSort(arr)).toEqual([2,3,5,7,11,13]);
  });
});
