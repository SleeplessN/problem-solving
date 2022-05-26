// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digits === "") {
    return [];
  }

  let input = [];
  for (k = 0; k < digits.length; k++) {
    input.push(map[digits[k]]);
  }

  while (input.length > 1) {
    let output = [];
    for (i = 0; i < input[0].length; i++) {
      for (j = 0; j < input[1].length; j++) {
        output.push(input[0][i] + input[1][j]);
      }
    }
    input.splice(0, 2, output);
  }

  return input[0];
};
