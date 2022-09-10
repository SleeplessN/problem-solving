function solution(n) {
  let x = 1;
  while (true) {
    if (n % x === 1) return x;
    x++;
  }
}

let input = [
  // TC: 1
  10,
  // TC: 2
  12,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
