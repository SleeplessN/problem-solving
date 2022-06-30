// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let result = 0;
  nums.sort((a, b) => a - b);
  let mid = nums[Math.floor(nums.length / 2)];
  for (let i = 0; i < nums.length; i++) {
    result += Math.abs(mid - nums[i]);
  }
  return result;
};
