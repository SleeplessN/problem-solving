// https://leetcode.com/problems/arranging-coins/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let sum = 0;
  let i = 1;
  while (sum <= n) {
    sum += i;
    i++;
  }
  return i - 2;
};
