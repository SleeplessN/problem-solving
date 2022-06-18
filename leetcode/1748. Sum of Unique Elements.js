// https://leetcode.com/problems/sum-of-unique-elements/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  let sum = 0;
  let map = {};
  for (let num of nums) map[num] = map[num] + 1 || 1;

  for (let i = 0; i < Object.keys(map).length; i++) {
    if (Object.values(map)[i] === 1) {
      sum += Number(Object.keys(map)[i]);
    }
  }
  return sum;
};
