// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  let map = {};

  for (let num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
    } else {
      map[num] += 1;
    }
  }

  const indexOfSingle = Object.values(map).indexOf(1);
  return Object.keys(map)[indexOfSingle];
};
