// https://leetcode.com/problems/maximum-length-of-pair-chain/

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  let curMax = -Infinity;
  let count = 0;
  pairs.sort((a, b) => (a[1] > b[1] ? 1 : -1));
  for (let i = 0; i < pairs.length; i++) {
    if (pairs[i][0] > curMax) {
      curMax = pairs[i][1];
      count++;
    }
  }

  return count;
};
