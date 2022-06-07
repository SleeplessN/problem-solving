/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function solution(a, b) {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
}

let input = [
  // TC: 1
  ["11", "1"],
  // TC: 2
  ["1010", "1011"],

  [
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011",
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
