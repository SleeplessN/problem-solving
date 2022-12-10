function solution(n, a, b) {
  let result = 1;
  const nextNumber = (num) => Math.floor((num + 1) / 2);
  while (a !== b) {
    if (nextNumber(a) === nextNumber(b)) break;
    a = nextNumber(a);
    b = nextNumber(b);
    result++;
  }
  return result;
}

let input = [
  // TC: 1
  [8, 4, 7],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
