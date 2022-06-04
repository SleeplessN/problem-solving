// https://leetcode.com/problems/single-number-iii/

var singleNumber = function (nums) {
  let map = {};

  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      delete map[num];
    }
  }

  return Object.keys(map);
};
