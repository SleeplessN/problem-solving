// https://leetcode.com/problems/relative-sort-array/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let map = {};
  let result = [];
  for (let num of arr1) map[num] = map[num] + 1 || 1;

  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < map[arr2[i]]; j++) {
      result.push(arr2[i]);
    }
    delete map[arr2[i]];
  }
  for (let i = 0; i < Object.keys(map).length; i++) {
    for (let j = 0; j < Object.values(map)[i]; j++) {
      result.push(Object.keys(map)[i]);
    }
  }
  return result;
};
