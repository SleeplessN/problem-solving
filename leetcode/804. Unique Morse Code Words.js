// https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  var morseSet = new Set();
  var map = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  words.forEach(function (item) {
    var encoded = item
      .split("")
      .map((x) => map[x.charCodeAt(0) - "a".charCodeAt(0)])
      .join("");
    morseSet.add(encoded);
  });
  return morseSet.size;
};
