// https://leetcode.com/problems/set-mismatch/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  nums.sort((a, b) => a - b);
  let disNum;
  let twiceNum;
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) {
      disNum = i + 1;
    }
    if (nums[i] === nums[i + 1]) {
      twiceNum = nums[i];
    }
    if (disNum && twiceNum) break;
  }
  return [twiceNum, disNum];
};
