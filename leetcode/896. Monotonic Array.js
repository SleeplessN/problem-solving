// https://leetcode.com/problems/monotonic-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  while (nums[0] === nums[1]) {
    nums.shift();
  }
  if (nums[0] < nums[1]) {
    for (let i = 1; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) return false;
    }
  } else if (nums[0] > nums[1]) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i + 1]) return false;
    }
  }
  return true;
};
