// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (str) {
  str = str
    .replace(/[^A-Za-z0-9]/g, "")
    .toLowerCase()
    .split("");
  return str.join("") === str.reverse().join("");
};
