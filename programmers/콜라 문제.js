function solution(a, b, n) {
  let result = 0;
  let have = 0;
  let left = 0;
  function coke(a, b, n) {
    const received = Math.floor(n / a) * b;
    left = n % a;
    result += received;
    have = received + left;

    if (have < a) return;
    else {
      coke(a, b, have);
    }
  }
  coke(a, b, n);
  return result;
}

let input = [
  // TC: 1
  [2, 1, 20],
  // TC: 2
  [3, 1, 20],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
