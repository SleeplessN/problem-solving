function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    if (
      !words[i].startsWith(words[i - 1][words[i - 1].length - 1]) ||
      i !== words.indexOf(words[i])
    )
      return [(i % n) + 1, Math.floor(i / n) + 1];
  }
  return [0, 0];
}

let input = [
  // TC: 1
  [
    3,
    [
      "tank",
      "kick",
      "know",
      "wheel",
      "land",
      "dream",
      "mother",
      "robot",
      "tank",
    ],
  ],
  // TC: 2
  [
    5,
    [
      "hello",
      "observe",
      "effect",
      "take",
      "either",
      "recognize",
      "encourage",
      "ensure",
      "establish",
      "hang",
      "gather",
      "refer",
      "reference",
      "estimate",
      "executive",
    ],
  ],

  [2, ["hello", "one", "even", "never", "now", "world", "draw"]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
