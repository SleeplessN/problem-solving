// https://leetcode.com/problems/majority-element-ii/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let n = nums.length;
  let result = [];
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  let entry = Object.entries(map);
  entry.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < entry.length; i++) {
    if (entry[i][1] > n / 3) {
      result.push(Number(entry[i][0]));
    }
  }
  return result;
};
