// https://leetcode.com/problems/count-number-of-teams/

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function (rating) {
  let result = 0;
  for (let i = 0; i < rating.length - 2; i++) {
    for (let j = i + 1; j < rating.length - 1; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if (rating[i] > rating[j] && rating[j] > rating[k]) result++;
        if (rating[i] < rating[j] && rating[j] < rating[k]) result++;
      }
    }
  }
  return result;
};
