// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = false;
  x = String(x).split("");
  if (x[0] === "-") {
    isNegative = true;
    x.shift();
  }
  x.reverse();
  while (x[0] === "0") {
    x.shift();
  }

  if (isNegative) x.unshift("-");

  x = x.join("");

  if (x > 2 ** 31 - 1 || x < (-2) ** 31) {
    return 0;
  } else {
    return x;
  }
};
