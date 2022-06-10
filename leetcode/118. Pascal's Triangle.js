// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let tmp;
  let result = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    tmp = [];
    for (let j = 0; j < result[i - 1].length - 1; j++) {
      tmp.push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    tmp.unshift(1);
    tmp.push(1);
    result.push(tmp);
  }
  return result;
};
