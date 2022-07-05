// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  let idx = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    result += (columnTitle[i].charCodeAt(0) - 64) * 26 ** idx;
    idx++;
  }
  return result;
};
