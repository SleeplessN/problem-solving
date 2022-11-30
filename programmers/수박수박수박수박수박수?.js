function solution(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result += "수";
    else result += "박";
  }
  return result;
}

let input = [
  // TC: 1
  3,
  // TC: 2
  4,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
