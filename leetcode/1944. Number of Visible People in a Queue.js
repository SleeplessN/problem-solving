// https://leetcode.com/problems/number-of-visible-people-in-a-queue/

/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function (heights) {
  let count;
  let max;
  let result = [];
  for (let i = 0; i < heights.length; i++) {
    max = 0;
    count = 0;
    for (let j = i + 1; j < heights.length; j++) {
      if (heights[j] > max) {
        max = heights[j];
        count++;
      }
      if (heights[j] > heights[i]) break;
    }
    result.push(count);
  }
  return result;
};
