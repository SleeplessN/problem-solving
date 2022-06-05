// https://leetcode.com/problems/divide-two-integers/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === -(2 ** 31) && divisor === -1) {
    return 2 ** 31 - 1;
  }
  let result = 0;
  let dividendAbs = Math.abs(dividend);
  let divisorAbs = Math.abs(divisor);
  let isNegative = false;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isNegative = true;
  }

  while (dividendAbs >= divisorAbs) {
    dividendAbs = dividendAbs - divisorAbs;
    result++;
  }

  if (isNegative) result = -result;
  if (result > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (result < -(2 ** 31)) {
    return -(2 ** 31);
  } else {
    return result;
  }
};
