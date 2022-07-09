// https://leetcode.com/problems/maximum-product-of-three-numbers/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length === 3) return nums.reduce((a, b) => a * b);
  nums.sort((a, b) => Math.abs(b) - Math.abs(a));
  let result;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        result = nums[i] * nums[j] * nums[k];
        if (result > 0) return result;
      }
    }
  }
  return result;
};
