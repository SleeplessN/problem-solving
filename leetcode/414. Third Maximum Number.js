// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  nums = [...new Set(nums)];
  if (nums.length < 3) return Math.max(...nums);
  nums.sort((a, b) => b - a);
  return nums[2];
};
