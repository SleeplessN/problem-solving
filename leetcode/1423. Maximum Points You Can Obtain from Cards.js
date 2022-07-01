// https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  if (cardPoints.length === k) return cardPoints.reduce((a, b) => a + b);
  let result;
  let cardEnd = cardPoints.length - 1;
  let endSum = cardPoints
    .slice(cardEnd - k + 1, cardEnd + 1)
    .reduce((a, b) => a + b);
  let sum = endSum;
  result = endSum;
  for (let i = 0; i < k; i++) {
    sum = sum - cardPoints[cardPoints.length - k + i] + cardPoints[i];
    result = Math.max(result, sum);
  }

  return result;
};
