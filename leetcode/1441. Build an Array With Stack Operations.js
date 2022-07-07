// https://leetcode.com/problems/build-an-array-with-stack-operations/

/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let result = [];
  let idx = 0;
  for (let i = 1; i <= n; i++) {
    if (i > target[target.length - 1]) return result;
    if (i !== target[idx]) {
      result.push("Push", "Pop");
    } else {
      result.push("Push");
      idx++;
    }
  }
  return result;
};
