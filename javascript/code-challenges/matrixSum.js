'use strict';

function matrixSum(matrix) {
  let output = [];
  // let idx = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    let runningTotal = 0;

    for (let j = 0; j < matrix.length; j++) {
      runningTotal += matrix[i][j];
    }

    output.push(runningTotal);
  }

  return output;
}

const matrix1 = [
  [1, 2, 3],
  [3, 5, 7],
  [1, 7, 10],
];
const matrix2 = [
  [0, 1, 5],
  [-4, 7, 2],
  [-3, 12, 11],
];

console.log(matrixSum(matrix1));
console.log(matrixSum(matrix2));
