// https://leetcode.com/problems/check-if-n-and-its-double-exist/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    let double = arr[i] * 2;
    let idx = arr.indexOf(double);
    if (idx !== -1 && idx !== i) result = true;
  }
  return result;
};
