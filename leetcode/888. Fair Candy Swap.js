// https://leetcode.com/problems/fair-candy-swap/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
  const aliceSum = aliceSizes.reduce((a, b) => a + b);
  const bobSum = bobSizes.reduce((a, b) => a + b);
  let diff = (aliceSum - bobSum) / 2;
  const aliceSet = new Set(aliceSizes);
  for (const candy of bobSizes) {
    if (aliceSet.has(candy + diff)) return [candy + diff, candy];
  }
};
