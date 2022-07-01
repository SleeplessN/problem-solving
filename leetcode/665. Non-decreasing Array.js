// https://leetcode.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (i >= 2 && nums[i] < nums[i - 2]) {
        nums[i] = nums[i - 1];
      }
      count++;
    }
  }
  return count < 2;
};
