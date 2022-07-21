// https://leetcode.com/problems/integer-replacement/

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  let result = 0;

  while (n !== 1) {
    if (n === 3) return result + 2;
    if (n % 2 === 0) {
      n /= 2;
      result++;
    } else {
      if (((n + 1) / 2) % 2 === 0) {
        n += 1;
      } else {
        n -= 1;
      }
      result++;
    }
  }
  return result;
};
