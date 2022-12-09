function solution(citations) {
  citations.sort((a, b) => b - a);
  let h = 0;
  while (h + 1 <= citations[h]) h++;
  return h;
}

let input = [
  // TC: 1
  [3, 0, 6, 1, 5],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
