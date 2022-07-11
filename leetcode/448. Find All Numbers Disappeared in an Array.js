// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  if (nums.length === 1) return [];
  let n = nums.length;
  let result = [];
  nums = [...new Set(nums)].sort((a, b) => a - b);
  for (let i = 1; i <= n; i++) {
    if (!nums.includes(i)) result.push(i);
  }
  return result;
};
