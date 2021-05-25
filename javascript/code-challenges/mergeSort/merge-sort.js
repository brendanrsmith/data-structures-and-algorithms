'use strict';

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.splice(0, mid);
    const right = arr.splice(0);
    // console.log('n', n);
    // console.log('mid', mid);
    // console.log('left', left);
    // console.log('right', right);
    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }

  return arr;
}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  // console.log('left', left);
  // console.log('right', right);
  // console.log('arr', arr);
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k += 1;
  }

  if (i === left.length) {
    while (j < right.length) {
      arr[k] = right[j];
      j += 1;
    }
  } else {
    while (i < left.length) {
      arr[k] = left[i];
      i += 1;
    }
  }
}

module.exports = mergeSort;
