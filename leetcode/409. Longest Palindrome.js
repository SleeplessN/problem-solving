// https://leetcode.com/problems/longest-palindrome/

var longestPalindrome = function (s) {
  const sArray = s.split("");
  let org = {};
  let result = 0;
  sArray.forEach((x) => {
    org[x] = (org[x] || 0) + 1;
  });
  const orgArray = Object.values(org);
  for (let i = 0; i < orgArray.length; i++) {
    if (orgArray[i] % 2 === 0) {
      result += orgArray[i];
    } else if (orgArray[i] % 2 === 1 && orgArray[i] > 2) {
      result += orgArray[i] - 1;
    }
  }
  if (result < sArray.length) {
    result += 1;
  }
  return result;
};
