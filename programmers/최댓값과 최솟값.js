function solution(s) {
  const nums = s.split(" ");
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}

let input = [
  // TC: 1
  "1 2 3 4",
  // TC: 2
  "-1 -2 -3 -4",

  "-1 -1",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
