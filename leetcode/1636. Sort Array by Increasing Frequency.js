// https://leetcode.com/problems/sort-array-by-increasing-frequency/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let result = [];

  let map = {};
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
  }
  let tmp = [...Object.entries(map)];
  tmp.sort(([key1, value1], [key2, value2]) => {
    if (value1 === value2) {
      return key2 - key1;
    }
    return value1 - value2;
  });
  for (let i = 0; i < tmp.length; i++) {
    for (let j = 0; j < tmp[i][1]; j++) {
      result.push(tmp[i][0]);
    }
  }
  return result;
};
