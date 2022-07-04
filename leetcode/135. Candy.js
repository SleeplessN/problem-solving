// https://leetcode.com/problems/candy/

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let len = ratings.length;
  let result = new Array(len).fill(1);
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) result[i] = result[i - 1] + 1;
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      result[i] = Math.max(result[i], result[i + 1] + 1);
    }
  }
  return result.reduce((a, b) => a + b);
};
