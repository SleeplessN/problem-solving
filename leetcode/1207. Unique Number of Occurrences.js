// https://leetcode.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let map = {};
  let check = {};
  for (let num of arr) {
    map[num] = map[num] + 1 || 1;
  }

  for (let num of Object.values(map)) {
    if (check[num] === undefined) {
      check[num] = 1;
    } else if (check[num] === 1) {
      return false;
    }
  }
  return true;
};
