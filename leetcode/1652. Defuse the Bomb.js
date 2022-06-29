// https://leetcode.com/problems/defuse-the-bomb/

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  let result = [];
  if (k === 0) {
    result = new Array(code.length).fill(0);
  } else if (k > 0) {
    for (let i = 0; i < code.length; i++) {
      result[i] = 0;
      for (let j = 1; j <= k; j++) {
        result[i] += code[(i + j) % code.length];
      }
    }
  } else {
    for (let i = 0; i < code.length; i++) {
      result[i] = 0;
      for (let j = k; j < 0; j++) {
        result[i] += code[[(i + j + code.length) % code.length]];
      }
    }
  }
  return result;
};
