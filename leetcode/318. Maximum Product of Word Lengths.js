// https://leetcode.com/problems/maximum-product-of-word-lengths/

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  var max = 0;
  var holder = new Array(words.length).fill(0);

  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length; j++) {
      holder[i] |= 1 << (words[i].charCodeAt(j) - 97);
    }
  }

  var len = words.length - 1;
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j <= len; j++) {
      if ((holder[i] & holder[j]) === 0) {
        max = Math.max(max, words[i].length * words[j].length);
      }
    }
  }

  return max;
};
