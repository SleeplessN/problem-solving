// https://leetcode.com/problems/next-greater-element-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let result = [];
  let tmp;
  for (let i = 0; i < nums.length; i++) {
    tmp = -1;
    for (let j = 1; j < nums.length; j++) {
      if (nums[0] < nums[j]) {
        tmp = nums[j];
        break;
      }
    }
    nums.push(nums.shift());
    result.push(tmp);
  }
  return result;
};
