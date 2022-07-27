// https://leetcode.com/problems/count-of-smaller-numbers-after-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const result = [];
  const sorted = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let left = 0;
    let right = sorted.length;
    while (left < right) {
      const current = ((right - left) >> 1) + left;
      if (sorted[current] < nums[i]) {
        left = current + 1;
      } else {
        right = current;
      }
    }
    sorted.splice(left, 0, nums[i]);
    result.push(left);
  }
  return result.reverse();
};
