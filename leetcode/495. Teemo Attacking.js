// https://leetcode.com/problems/teemo-attacking/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let poison = 0;
  for (let i = 0; i < timeSeries.length - 1; i++) {
    poison += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }
  return poison + duration;
};
