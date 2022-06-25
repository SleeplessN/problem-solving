// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let trifib = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    let cur = trifib[i - 3] + trifib[i - 2] + trifib[i - 1];
    trifib.push(cur);
  }
  return trifib[n];
};
