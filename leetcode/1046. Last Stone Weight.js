// https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (!stones.length) return 0;
  stones.sort((a, b) => b - a);

  let x, y;
  while (stones.length !== 1) {
    x = stones.shift();
    y = stones.shift();
    if (x == y) {
      if (!stones.length) return 0;
    } else {
      stones.push(x - y);
    }
    stones.sort((a, b) => b - a);
  }
  return stones[0];
};
