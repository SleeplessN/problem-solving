// https://leetcode.com/problems/replace-words/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      if (sentence[i].startsWith(dictionary[j])) {
        sentence[i] = dictionary[j];
      }
    }
  }
  return sentence.join(" ");
};
