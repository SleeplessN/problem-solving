// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  x = x.toString();
  result = true;
  for (i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      result = false;
      return result;
    }
  }
  return result;
};
