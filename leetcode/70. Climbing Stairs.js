// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  let pastPastStair, pastStair, stair;
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  } else n >= 3;
  pastPastStair = 1;
  pastStair = 2;
  stair = pastPastStair + pastStair;
  for (i = 3; i < n; i++) {
    pastPastStair = pastStair;
    pastStair = stair;
    stair = pastPastStair + pastStair;
  }
  return stair;
};
