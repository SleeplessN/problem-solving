// https://leetcode.com/problems/reorganize-string/

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  let map = {};
  for (let str of s) map[str] = map[str] + 1 || 1;

  let sort = Object.keys(map).sort((a, b) => map[b] - map[a]);
  let res = [];
  let index = 0;

  for (let i = 0; i < sort.length; i++) {
    let occur = map[sort[i]];
    if (occur > Math.ceil(s.length / 2)) return "";
    for (let j = 0; j < occur; j++) {
      if (index >= s.length) index = 1;
      res[index] = sort[i];
      index += 2;
    }
  }
  return res.join("");
};
