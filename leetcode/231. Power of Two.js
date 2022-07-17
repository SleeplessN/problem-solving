// https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  for (let i = 0; i <= n; i++) {
    if (2 ** i > n) {
      return false;
    } else if (2 ** i === n) {
      return true;
    }
  }
};
