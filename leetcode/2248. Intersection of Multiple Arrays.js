// https://leetcode.com/problems/intersection-of-multiple-arrays/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let result = [];
  let isCommon;
  for (let num of nums[0]) {
    isCommon = true;
    for (let i = 1; i < nums.length; i++) {
      if (!nums[i].includes(num)) {
        isCommon = false;
        break;
      }
    }
    if (isCommon) result.push(num);
  }
  return result.sort((a, b) => a - b);
};
