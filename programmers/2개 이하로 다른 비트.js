function solution(numbers) {
  const result = [];
  for (let number of numbers) result.push(searchNum(number));
  return result;
}

function searchNum(x) {
  if (x % 2 === 0) return x + 1;
  let bit = "0" + x.toString(2);
  let idx = bit.lastIndexOf("0");
  return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
}

let input = [
  // TC: 1
  [2, 7],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
