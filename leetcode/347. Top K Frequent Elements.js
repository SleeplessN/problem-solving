// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let result = [];
  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }

  let entry = Object.entries(map);
  entry.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    result.push(Number(entry[i][0]));
  }
  return result;
};
