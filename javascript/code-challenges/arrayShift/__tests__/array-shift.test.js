'use strict';

const shiftArray = require('../array-shift');

describe('insertShiftArray:', () => {
  it('should insert number into an even-length array', () => {
    const even = shiftArray.insertShiftArray([2, 4, 6, 8], 5);
    expect(even).toEqual([2, 4, 5, 6, 8]);
  });

  it('should insert number into an odd-length array', () => {
    const odd = shiftArray.insertShiftArray([4, 8, 15, 23, 42], 16);
    expect(odd).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
