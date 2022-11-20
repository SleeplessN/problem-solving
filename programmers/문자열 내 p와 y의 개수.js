function solution(s) {
  const countP = [...s.matchAll(/p/gi)].length;
  const countY = [...s.matchAll(/y/gi)].length;
  return countP === countY;
}

let input = [
  // TC: 1
  "pPoooyY",
  // TC: 2
  "Pyy",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
