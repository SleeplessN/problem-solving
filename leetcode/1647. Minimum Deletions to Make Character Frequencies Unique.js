// https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/

/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function (s) {
  let result = 0;
  let map = {};
  for (let str of s) {
    map[str] = map[str] + 1 || 1;
  }
  let freq = Object.values(map);
  freq.sort((a, b) => b - a);

  for (let i = 0; i < freq.length - 1; i++) {
    if (freq[i] === freq[i + 1]) {
      result++;
      freq[i + 1]--;
    } else if (freq[i] < freq[i + 1]) {
      result += freq[i + 1] - freq[i] + 1;
      freq[i + 1] -= freq[i + 1] - freq[i] + 1;
      if (freq[i + 1] < 0) {
        freq[i + 1] = 0;
        result--;
      }
    }
  }

  return result;
};
