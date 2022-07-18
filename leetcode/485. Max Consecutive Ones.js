// https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else if (nums[i] === 0) {
      result = Math.max(result, count);
      count = 0;
    }
    if (i === nums.length - 1) {
      result = Math.max(result, count);
    }
  }
  return result;
};
