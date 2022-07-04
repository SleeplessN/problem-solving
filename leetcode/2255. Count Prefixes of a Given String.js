// https://leetcode.com/problems/count-prefixes-of-a-given-string/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function (words, s) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) result++;
  }
  return result;
};
