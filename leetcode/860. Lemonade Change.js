// https://leetcode.com/problems/lemonade-change/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let haveFive = 0;
  let haveTen = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      haveFive++;
    } else if (bills[i] === 10) {
      if (haveFive === 0) return false;
      haveFive--;
      haveTen++;
    } else {
      if (haveTen > 0 && haveFive > 0) {
        haveTen--;
        haveFive--;
      } else if (haveFive >= 3) {
        haveFive -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
