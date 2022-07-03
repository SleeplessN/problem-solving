// https://leetcode.com/problems/find-closest-number-to-zero/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function (nums) {
  if (nums.includes(0)) return 0;
  nums = [...new Set(nums)];
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  if (nums[0] === -nums[1]) {
    return nums[0] > nums[1] ? nums[0] : nums[1];
  }
  return nums[0];
};
