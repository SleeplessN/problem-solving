function solution(word) {
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  const plus = [781, 156, 31, 6, 1];
  return word
    .split("")
    .reduce((acc, ch, idx) => acc + obj[ch] * plus[idx] + 1, 0);
}

let input = [
  // TC: 1
  "AAAAE",
  // TC: 2
  "AAAE",
  // TC: 3
  "I",
  // TC: 4
  "EIO",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
