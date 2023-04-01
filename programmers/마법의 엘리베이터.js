function solution(storey) {
  let result = 0;
  const splitStorey = String(storey).split("").map(Number);

  for (let i = splitStorey.length - 1; i >= 0; i--) {
    if (splitStorey[i] > 5) {
      result += 10 - splitStorey[i];
      if (i === 0) result++;
      splitStorey[i - 1]++;
    } else if (splitStorey[i] === 5 && i > 0 && splitStorey[i - 1] >= 5) {
      result += 5;
      splitStorey[i - 1]++;
    } else {
      result += splitStorey[i];
    }
  }
  return result;
}

let input = [
  // TC: 1
  16,
  // TC: 2
  2554,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
