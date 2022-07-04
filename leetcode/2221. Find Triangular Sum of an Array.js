// https://leetcode.com/problems/find-triangular-sum-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  if (nums.length === 1) return nums[0];
  while (nums.length !== 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] += nums[i + 1];
      nums[i] %= 10;
    }
    nums.pop();
  }
  return nums[0];
};
