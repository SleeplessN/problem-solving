//leetcode.com/problems/interleaving-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
https: var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let dp = [];
  for (let i = 0; i <= s1.length; i++) {
    let tmp = new Array(s2.length + 1).fill(false);
    dp.push(tmp);
  }
  for (let i = 0; i <= s1.length; i++) {
    dp[i][0] = s1.slice(0, i) === s3.slice(0, i);
  }
  for (let i = 0; i <= s2.length; i++) {
    dp[0][i] = s2.slice(0, i) === s3.slice(0, i);
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
    }
  }
  return dp[s1.length][s2.length];
};
