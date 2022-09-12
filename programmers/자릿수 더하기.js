function solution(n) {
  let result = 0;
  const nArr = String(n).split("");
  nArr.forEach((num) => (result += Number(num)));
  return result;
}

let input = [
  // TC: 1
  123,
  // TC: 2
  987,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
