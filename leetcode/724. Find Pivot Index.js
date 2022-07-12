// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 1) return 0;
  let totalSum = nums.reduce((a, b) => a + b);
  let leftSum = 0;
  let rightSum = totalSum - nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum) return i;
    rightSum -= nums[i + 1];
    leftSum += nums[i];
  }
  return -1;
};
