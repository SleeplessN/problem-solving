// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  prices.reverse();
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let j = i + 1;
    if (prices[i] > prices[j]) {
      profit += prices[i] - prices[j];
    }
  }
  return profit;
};
