'use strict';

// reference https://en.wikipedia.org/wiki/Binary_search_algorithm

function binarySearch(arr, key) {
  // set left search bound to index 0, right search bound to index array length
  let l = 0;
  let r = arr.length - 1;

  function search(l, r, key) {
    // while left search bound != right search bound, let mid-point equal halfway between the two
    while (l !== r) {
      let mid = Math.ceil((r + l) / 2);

      // if the array value at the current midpoint is greater than the key, set right search bound to midpoint-1 and repeat search
      if (arr[mid] > key) {
        r = mid - 1;
        search(l, r, key);

      // else, its smaller, so set the left search bound to index+1 and repeat search
      } else {
        l = mid + 1;
        search(l, r, key);
      }
    }
    // finally, if the array value at the matching search bounds is equal to the value, return it
    if (arr[l] === key) {
      return l;
    // otherwise, the value must not be present, so return -1
    } else return -1;
  }
  return search(l, r, key);
}

module.exports = {
  binarySearch: binarySearch,
};
