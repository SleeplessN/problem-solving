function solution(s) {
  let count = 0;
  let deleteZeroCount = 0;
  while (s !== "1") {
    let len = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") deleteZeroCount++;
      else len++;
    }
    s = len.toString(2);
    count++;
  }
  return [count, deleteZeroCount];
}

let input = [
  // TC: 1
  "110010101001",
  // TC: 2
  "01110",
  "1111111",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
