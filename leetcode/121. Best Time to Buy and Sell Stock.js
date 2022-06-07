// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let hold = 0;
  let profit = 0;
  let maxProfit = 0;
  prices.reverse();
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > hold) {
      hold = prices[i];
    } else if (prices[i] < hold) {
      profit = hold - prices[i];
    }
    if (maxProfit < profit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
};
