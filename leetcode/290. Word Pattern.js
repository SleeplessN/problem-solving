// https://leetcode.com/problems/word-pattern/

var wordPattern = function (pattern, s) {
  const sArray = s.split(" ");
  let samePatternIndex;
  if (pattern.length > sArray.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    samePatternIndex = pattern.indexOf(pattern[i], i + 1);
    if (samePatternIndex !== -1) {
      if (sArray[i] !== sArray[samePatternIndex]) {
        return false;
      }
    } else if (samePatternIndex === -1) {
      if (sArray.indexOf(sArray[i], i + 1) !== -1) {
        return false;
      }
    }
    if (samePatternIndex - i > 1) {
      let j = i;
      while (j < samePatternIndex - 1) {
        if (sArray[j + 1] !== sArray[samePatternIndex]) {
          j++;
        } else return false;
      }
    }
  }
  return true;
};
