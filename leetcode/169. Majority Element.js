// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  let numEntry = Object.entries(map);
  numEntry.sort((a, b) => b[1] - a[1]);

  return Number(numEntry[0][0]);
};
