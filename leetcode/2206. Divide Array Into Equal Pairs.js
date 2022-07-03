// https://leetcode.com/problems/divide-array-into-equal-pairs/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  let result = 0;
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  let values = Object.values(map);
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 0) {
      result += values[i] / 2;
    }
  }
  return result === nums.length / 2;
};
