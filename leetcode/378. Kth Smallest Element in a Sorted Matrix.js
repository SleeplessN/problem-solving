// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  return matrix.flat().sort((a, b) => a - b)[k - 1];
};
