// https://leetcode.com/problems/find-the-middle-index-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b) - nums[0];
  if (leftSum === rightSum) return 0;
  for (let i = 1; i < nums.length; i++) {
    leftSum += nums[i - 1];
    rightSum -= nums[i];
    if (leftSum === rightSum) return i;
  }
  return -1;
};
