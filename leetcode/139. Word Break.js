// https://leetcode.com/problems/word-break/

var wordBreak = function (s, wordDict) {
  const checked = new Set();
  const queue = [""];

  while (queue.length > 0) {
    const base = queue.shift();

    for (const possibleNextWord of wordDict) {
      const possibleStr = base + possibleNextWord;
      if (possibleStr === s) return true;

      if (s.indexOf(possibleStr) === 0 && !checked.has(possibleStr)) {
        checked.add(possibleStr);
        queue.push(possibleStr);
      }
    }
  }

  return false;
};
