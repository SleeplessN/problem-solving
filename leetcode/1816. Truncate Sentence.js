// https://leetcode.com/problems/truncate-sentence/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let result = [];
  s = s.split(" ");
  for (let i = 0; i < k; i++) {
    result.push(s[i]);
  }
  return result.join(" ");
};
