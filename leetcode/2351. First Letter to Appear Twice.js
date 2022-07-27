// https://leetcode.com/problems/first-letter-to-appear-twice/

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  let sSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (sSet.has(s[i])) return s[i];
    sSet.add(s[i]);
  }
};
