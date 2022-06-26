// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  const sortNums = [...nums].sort((a, b) => a - b);
  let idx = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== sortNums[i]) idx.push(i);
  }
  if (idx.length === 0) return 0;
  return idx[idx.length - 1] - idx[0] + 1;
};
