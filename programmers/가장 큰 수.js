function solution(numbers) {
  const stringNum = numbers
    .map((el) => el + "")
    .sort((a, b) => b + a - (a + b));

  return stringNum[0] === "0" ? "0" : stringNum.join("");
}

let input = [
  // TC: 1
  [6, 10, 2],
  // TC: 2
  [3, 30, 34, 5, 9],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
