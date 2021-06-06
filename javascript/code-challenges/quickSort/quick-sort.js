'use strict';

function quickSort(arr, left, right) {
  if (left < right) {
    // partition array by setting position of the pivot val
    let position = partition(arr, left, right);

    // sort left
    quickSort(arr, left, position - 1);
    // sort right
    quickSort(arr, position + 1, right);
  }

  return arr;
}

function partition(arr, left, right) {
  // set pivot value as point of ref
  let pivot = arr[right];

  // create var to track largest idx of nums lower than defined pivot
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low += 1;
      swap(arr, i, low);
    }
  }

  swap(arr, right, low + 1);

  // return the pivot idx point
  return low + 1;
}

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
