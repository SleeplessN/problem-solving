// https://leetcode.com/problems/number-of-matching-subsequences/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let result = 0;
  for (let i = 0; i < words.length; i++) {
    let idx = -1;
    let isSeq = true;
    for (let j = 0; j < words[i].length; j++) {
      idx = s.indexOf(words[i][j], idx + 1);
      if (idx === -1) {
        isSeq = false;
        break;
      }
    }
    if (isSeq) result++;
  }
  return result;
};
