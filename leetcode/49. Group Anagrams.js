// https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function (strs) {
  const map = {};

  for (let str of strs) {
    const sort = str.split("").sort().join("");
    if (sort in map) {
      map[sort].push(str);
    } else {
      map[sort] = [str];
    }
  }
  return Object.values(map);
};
