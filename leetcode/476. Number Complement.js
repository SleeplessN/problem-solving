// https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  num = num.toString(2).split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") {
      num[i] = "1";
    } else if (num[i] === "1") {
      num[i] = "0";
    }
  }
  return parseInt(num.join(""), 2);
};
