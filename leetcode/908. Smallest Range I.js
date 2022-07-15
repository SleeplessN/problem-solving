// https://leetcode.com/problems/smallest-range-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
  result = Math.max(...nums) - Math.min(...nums) - 2 * k;
  return result > 0 ? result : 0;
};
