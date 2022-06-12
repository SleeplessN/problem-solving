// https://leetcode.com/problems/contains-duplicate-ii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (nums.length === new Set(nums).size) return false;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};
