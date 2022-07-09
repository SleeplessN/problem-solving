// https://leetcode.com/problems/jump-game-vi/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function (nums, k) {
  if (nums.length == 1) return nums[0];

  let dp = new Array(nums.length);
  let q = [];
  q.push(0);
  dp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (q.length > 0 && q[0] < i - k) {
      q.shift();
    }
    dp[i] = dp[q[0]] + nums[i];

    while (q.length > 0 && dp[i] >= dp[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);
  }
  return dp[nums.length - 1];
};
