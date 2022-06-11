// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s === "") return true;
  let idx = t.indexOf(s[0]);
  if (idx === -1) return false;
  for (let i = 1; i < s.length; i++) {
    idx = t.indexOf(s[i], idx + 1);
    if (idx === -1) return false;
  }
  return true;
};
