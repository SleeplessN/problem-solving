function solution(number, limit, power) {
  const result = [];

  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j < parseInt(i ** 0.5) + 1; j++) {
      if (i % j === 0) {
        count++;
        if (j ** 2 !== i) count++;
      }
      if (count > limit) {
        count = power;
        break;
      }
    }
    result.push(count);
  }
  return result.reduce((pre, cur) => pre + cur, 0);
}

let input = [
  // TC: 1
  [5, 3, 2],
  // TC: 2
  [10, 3, 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
