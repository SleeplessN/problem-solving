function solution(n) {
  let answer = n;
  const nOneCount = n.toString(2).match(/1/g).length;
  while (true) {
    answer++;
    if (nOneCount === answer.toString(2).match(/1/g).length) break;
  }
  return answer;
}

let input = [
  // TC: 1
  78,
  // TC: 2
  15,
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
