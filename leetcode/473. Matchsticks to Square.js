// https://leetcode.com/problems/matchsticks-to-square/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  let total = matchsticks.reduce((a, b) => a + b);
  if (total % 4 !== 0 || matchsticks.length < 4) return false;
  let squLen = total / 4;

  function partition(idx, sum, count) {
    if (count === 3) return true;
    if (sum === squLen) return partition(0, 0, count + 1);
    if (sum > squLen) return false;

    for (let i = idx; i < matchsticks.length; i++) {
      if (matchsticks[i] === 0) continue;
      const tmp = matchsticks[i];
      matchsticks[i] = 0;
      if (partition(i + 1, sum + tmp, count)) return true;
      matchsticks[i] = tmp;
    }
    return false;
  }
  return partition(0, 0, 0);
};
