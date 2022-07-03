// https://leetcode.com/problems/wiggle-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) return nums.length;
  let pos = 1;
  let neg = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      neg = pos + 1;
    } else if (nums[i] < nums[i + 1]) {
      pos = neg + 1;
    }
  }
  return Math.max(pos, neg);
};
