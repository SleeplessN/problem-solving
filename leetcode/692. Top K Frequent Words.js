// https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let result = [];
  let map = {};
  for (let word of words) {
    map[word] = map[word] + 1 || 1;
  }
  let entry = Object.entries(map);
  entry.sort();
  entry.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(entry[i][0]);
  }
  return result;
};
