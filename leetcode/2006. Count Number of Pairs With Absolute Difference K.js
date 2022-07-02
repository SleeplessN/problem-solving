// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[j] - nums[i]) === k) result++;
    }
  }
  return result;
};
