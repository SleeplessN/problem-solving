// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let sum = 0;
  let min = Math.min(...nums);
  for (let num of nums) {
    sum += num - min;
  }
  return sum;
};
