// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/submissions/

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      stack.length === 0 ? count++ : stack.pop();
    }
  }
  return stack.length + count;
};
