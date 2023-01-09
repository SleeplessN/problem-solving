function solution(k, d) {
  let result = 0;
  for (let x = 0; x <= d; x += k) {
    let y = parseInt(Math.sqrt(d ** 2 - x ** 2));

    result += parseInt(y / k) + 1;
  }
  return result;
}

let input = [
  // TC: 1
  [2, 4],
  // TC: 2
  [1, 5],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
