// https://leetcode.com/problems/coin-change-2/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (coin <= i) {
        dp[i] += dp[i - coin];
      }
    }
  }
  return dp[amount];
};
