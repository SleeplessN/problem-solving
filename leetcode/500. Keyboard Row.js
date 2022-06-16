// https://leetcode.com/problems/keyboard-row/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  let keyboardRow = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  return words.filter((word) =>
    keyboardRow.some((row) =>
      word.split("").every((letter) => row.includes(letter.toLowerCase()))
    )
  );
};
