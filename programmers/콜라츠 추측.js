function solution(num) {
  let result = 0;
  while (num !== 1 && result < 500) {
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;
    result++;
  }
  return result !== 500 ? result : -1;
}

let input = [
  // TC: 1
  6,
  // TC: 2
  16,

  626331,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
