// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  s = s.split("");
  t = t.split("");
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      t.splice(t.indexOf(s[i]), 1);
    }
  }
  return t[0];
};
