// https://leetcode.com/problems/ugly-number-ii/submissions/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let dp = [];
  dp[1] = 1;
  let p2 = 1;
  let p3 = 1;
  let p5 = 1;

  for (let i = 2; i <= n; i++) {
    const n2 = dp[p2] * 2;
    const n3 = dp[p3] * 3;
    const n5 = dp[p5] * 5;

    const minValue = Math.min(n2, n3, n5);
    dp[i] = minValue;

    if (minValue === n2) {
      p2++;
    }
    if (minValue === n3) {
      p3++;
    }
    if (minValue === n5) {
      p5++;
    }
  }

  return dp[n];
};
