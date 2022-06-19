// https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character/

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  let count;
  let max;
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    max = 1;
    queries[i] = queries[i].split("").sort();
    for (let j = 1; j < queries[i].length; j++) {
      if (queries[i][0] == queries[i][j]) max++;
    }
    queries[i] = max;
  }
  for (let i = 0; i < words.length; i++) {
    max = 1;
    words[i] = words[i].split("").sort();
    for (let j = 1; j < words[i].length; j++) {
      if (words[i][0] == words[i][j]) max++;
    }
    words[i] = max;
  }
  for (let i = 0; i < queries.length; i++) {
    count = 0;
    for (let j = 0; j < words.length; j++) {
      if (queries[i] < words[j]) count++;
    }
    result.push(count);
  }

  return result;
};
