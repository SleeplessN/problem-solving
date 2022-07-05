// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);

  return Number(nums.join("")) === 0 ? "0" : nums.join("");
};
