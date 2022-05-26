// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  const word = s.split(" ");
  let i = word.length - 1;
  if (i == 0) {
    return word[0].length;
  }

  while (i >= 0) {
    if (word[i] !== "") {
      return word[i].length;
    } else {
      i--;
    }
  }
};
