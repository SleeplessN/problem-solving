function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
  }
  return result - money >= 0 ? result - money : 0;
}

let input = [
  // TC: 1
  [3, 20, 4],
  // TC: 2
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
