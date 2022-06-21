// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  let order = [];
  let map = {};
  for (let i = 0; i < mat.length; i++) {
    map[i] = 0;
    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j] === 1) map[i]++;
    }
    order.push(i);
  }
  order.sort((a, b) => map[a] - map[b]);
  return order.slice(0, k);
};
