function solution(sequence, k) {
  let p1 = 0;
  let p2 = 1;
  let sum = sequence[p1];
  const stack = [];

  while (p2 <= sequence.length) {
    if (sum < k) {
      sum += sequence[p2];
      p2++;
    } else if (sum > k) {
      sum -= sequence[p1];
      p1++;
    } else {
      stack.push([p1, p2 - 1]);
      sum += sequence[p2];
      p2++;
    }
  }

  stack.sort((a, b) => {
    if (a[1] - a[0] !== b[1] - b[0]) {
      return a[1] - a[0] - b[1] - b[0] > 0 ? 1 : -1;
    }
  });

  return stack[0];
}

let input = [
  // TC: 1
  [[1, 2, 3, 4, 5], 7],
  // TC: 2
  [[1, 1, 1, 2, 3, 4, 5], 5],
  // TC: 3
  [[2, 2, 2, 2, 2], 6],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
