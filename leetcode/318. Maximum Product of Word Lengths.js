// https://leetcode.com/problems/maximum-product-of-word-lengths/

/**
 * @param {string[]} words
 * @return {number}
 */

// Time Limit Exceeded!
var maxProduct = function (words) {
  words.sort((a, b) => b.length - a.length);

  let max = 0;

  for (let i = 0; i < words.length - 1; i++) {
    if (max > words[i].length * words[i + 1].length) return max;
    for (let j = i + 1; j < words.length; j++) {
      if (isDup(words[i], words[j])) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }
  return max;
};

function isDup(a, b) {
  let aSet = [...new Set(a.split(""))];
  let bSet = [...new Set(b.split(""))];

  for (let i = 0; i < aSet.length; i++) {
    if (bSet.includes(aSet[i])) {
      return false;
    }
  }
  return true;
}
