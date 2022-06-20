// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
  for (let i = 0; i < words.length; i++) {
    if (s.length !== 0) {
      if (s.startsWith(words[i])) {
        s = s.split("");
        for (let j = 0; j < words[i].length; j++) {
          s.shift();
        }
        s = s.join("");
      } else {
        return false;
      }
    }
  }
  if (s.length !== 0) return false;
  return true;
};
