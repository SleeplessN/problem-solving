// https://leetcode.com/problems/largest-number-at-least-twice-of-others/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  let maxNum = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
      result = i;
    }
  }
  const maxHalfNum = maxNum / 2;
  for (let i = 0; i < nums.length; i++) {
    if (i === result) continue;
    if (nums[i] > maxHalfNum) return -1;
  }
  return result;
};
