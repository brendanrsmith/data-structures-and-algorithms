'use strict';

function insertShiftArray(array, val) {
  const middle = Math.round(array.length / 2);
  for (let index = array.length - 1; index >= middle; index--) {
    const element = array[index];
    array[index + 1] = element;
  }
  array[middle] = val;
  return array;
}

module.exports = {
  insertShiftArray: insertShiftArray,
};
