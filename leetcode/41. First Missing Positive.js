// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums = [...new Set(nums)].filter((x) => x > 0).sort((a, b) => a - b);
  let idx = 0;
  // init case
  if (nums[0] !== 1) return 1;
  while (idx < nums.length) {
    if (nums[idx] + 1 !== nums[idx + 1] || nums[idx + 1] === undefined) {
      return nums[idx] + 1;
    }
    idx++;
  }
};
