// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  nums.sort((a, b) => a - b);
  let smallNum = nums[0];
  let largeNum = nums[nums.length - 1];
  let remain;
  while (smallNum > 0) {
    remain = largeNum % smallNum;
    largeNum = smallNum;
    smallNum = remain;
  }
  return largeNum;
};
