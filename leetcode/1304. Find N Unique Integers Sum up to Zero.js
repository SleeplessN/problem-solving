// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  if (n === 1) return [0];
  let result = [];
  if (n % 2 === 1) result.push(0);
  for (let i = Math.floor(n / 2); i > 0; i--) {
    result.push(i);
    result.push(-i);
  }
  return result.sort((a, b) => a - b);
};
