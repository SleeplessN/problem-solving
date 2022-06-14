// https://leetcode.com/problems/sort-characters-by-frequency/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {};
  let result = "";
  s = s.split("").sort();
  for (let str of s) map[str] = map[str] + 1 || 1;
  let keys = Object.keys(map);
  keys.sort((a, b) => map[b] - map[a]);
  for (let key of keys) {
    for (let i = 0; i < map[key]; i++) {
      result += key;
    }
  }
  return result;
};
