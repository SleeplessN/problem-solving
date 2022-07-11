// https://leetcode.com/problems/degree-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let result = Infinity;
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  let entry = Object.entries(map);
  entry.sort((a, b) => b[1] - a[1]);
  let max = entry[0][1];
  for (let num in map) {
    if (map[num] === max) {
      result = Math.min(
        result,
        nums.lastIndexOf(Number(num)) - nums.indexOf(Number(num)) + 1
      );
    }
  }
  return result;
};
