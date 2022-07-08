// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
  let max = 0;
  let row, col;
  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) {
        min = matrix[i][j];
        row = i;
        col = j;
      }
    }
    max = Math.max(max, min);
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i === row) continue;
    if (max < matrix[i][col]) return [];
  }
  return [max];
};
