// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  let result = [];
  const sArr = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((x) => x.split(",").map((y) => parseInt(y)))
    .sort((a, b) => a.length - b.length);

  for (let num of sArr) result.push(...num.filter((x) => !result.includes(x)));
  return result;
}

let input = [
  // TC: 1
  "{{2},{2,1},{2,1,3},{2,1,3,4}}",
  // TC: 2
  "{{1,2,3},{2,1},{1,2,4,3},{2}}",

  "{{20,111},{111}}",
  "{{123}}",
  "{{4,2,3},{3},{2,3,4,1},{2,3}}",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
