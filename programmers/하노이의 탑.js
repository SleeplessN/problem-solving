function solution(n) {
  const result = [];
  hanoi(n, 1, 3, 2);

  function hanoi(n, start, end, mid) {
    if (n === 1) result.push([start, end]);
    else {
      hanoi(n - 1, start, mid, end);
      result.push([start, end]);
      hanoi(n - 1, mid, end, start);
    }
  }

  return result;
}

let input = [
  // TC: 1
  2,
  // TC: 2
  3,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
