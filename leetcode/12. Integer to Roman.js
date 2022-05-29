// https://leetcode.com/problems/integer-to-roman/

var intToRoman = function (num) {
  let result = "";
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };
  let size = Object.keys(roman).length;

  while (num) {
    if (num >= Object.values(roman)[size]) {
      num -= Object.values(roman)[size];
      result += Object.keys(roman)[size];
    } else {
      size--;
    }
  }
  return result;
};
