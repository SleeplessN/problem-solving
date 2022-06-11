// https://leetcode.com/problems/arithmetic-slices/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let count = 0;
  let dif;
  let nextNum;
  let j;
  let idx;
  for (let i = 0; i < nums.length - 2; i++) {
    j = i + 1;
    idx = j + 1;
    dif = nums[j] - nums[i];
    nextNum = nums[j] + dif;

    while (nums.indexOf(nextNum) !== -1) {
      if (idx === nums.indexOf(nextNum, idx)) {
        count++;
        nextNum = nums[nums.indexOf(nextNum + dif, ++idx)];
      } else break;
    }
  }
  return count;
};
