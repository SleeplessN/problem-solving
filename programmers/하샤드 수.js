function solution(x) {
  return (
    x %
      x
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, cur) => acc + cur, 0) ===
    0
  );
}

let input = [
  // TC: 1
  10,
  // TC: 2
  12, 11, 13,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
