// https://leetcode.com/problems/add-digits/

var addDigits = function (num) {
  const x = String(num);
  let result = 0;
  for (i = 0; i < x.length; i++) {
    result += Number(x[i]);
  }
  if (String(result).length > 1) {
    return addDigits(result);
  } else {
    return result;
  }
};
