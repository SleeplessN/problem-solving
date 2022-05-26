// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let lastNumPlusOne = digits[digits.length - 1] + 1;
  digits.splice(digits.length - 1, 1, lastNumPlusOne);
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] > 9) {
      digits.splice(i, 1, 0);
      if (0 > i - 1) {
        digits.unshift(1);
      } else {
        digits.splice(i - 1, 1, digits[i - 1] + 1);
      }
    }
  }
  return digits;
};
