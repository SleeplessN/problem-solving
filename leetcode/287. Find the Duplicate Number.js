// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let map = {};
  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      return num;
    }
  }
};
