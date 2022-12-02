function solution(n) {
  let result = 0;
  const arr = new Array(n + 1).fill(true);

  for (let i = 2; i <= n; ++i) {
    if (arr[i] === false) {
      continue;
    }
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false;
    }
  }
  for (let i = 2; i <= n; ++i) {
    if (arr[i] === true) {
      result++;
    }
  }
  return result;
}

let input = [
  // TC: 1
  10,
  // TC: 2
  5,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
