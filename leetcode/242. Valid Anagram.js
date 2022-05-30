// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  const sArr = s.split("").sort();
  const tArr = t.split("").sort();

  return sArr.join("") === tArr.join("");
};
