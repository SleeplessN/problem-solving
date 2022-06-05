// https://leetcode.com/problems/implement-strstr/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let sub;
  if (!haystack.includes(needle)) return -1;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    sub = haystack.substring(i, i + needle.length);
    if (sub === needle) {
      return i;
    }
  }
};
