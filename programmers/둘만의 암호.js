function solution(s, skip, index) {
  let answer = "";

  const regex = new RegExp(`[^${skip}]`, "g");
  const alphabet = "abcdefghijklmnopqrstuvwxyz".match(regex);

  for (const alpha of s) {
    const idx = alphabet.indexOf(alpha) + index;

    answer += alphabet[idx % alphabet.length];
  }
  return answer;
}

let input = [
  // TC: 1
  ["aukks", "wbqd", 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
