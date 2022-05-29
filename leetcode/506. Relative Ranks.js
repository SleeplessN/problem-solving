// https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function (score) {
  let result = [...score];
  let clone = [...score];
  let award = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  if (score.length > 3) {
    for (i = 4; i <= score.length; i++) {
      award.push(`${i}`);
    }
  }
  let rank = 0;
  clone.sort((a, b) => b - a);
  while (clone.length !== 0) {
    result.splice(score.indexOf(clone.shift()), 1, award[rank]);
    rank++;
  }

  return result;
};
