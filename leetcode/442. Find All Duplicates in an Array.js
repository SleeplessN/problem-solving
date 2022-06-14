// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];
  let map = {};
  for (let num of nums) {
    if (map[num] == undefined) {
      map[num] = 1;
    } else {
      result.push(num);
    }
  }

  return result;
};
