// https://leetcode.com/problems/replace-elements-in-an-array/

/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function (nums, operations) {
  for (let i = 0; i < operations.length; i++) {
    nums[nums.indexOf(operations[i][0])] = operations[i][1];
  }
  return nums;
};
