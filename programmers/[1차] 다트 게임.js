function solution(dartResult) {
  let score = 0;
  let cnt = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    } else if (dartResult[i] === "S") {
      cnt.push(score);
    } else if (dartResult[i] === "D") {
      cnt.push(Math.pow(score, 2));
    } else if (dartResult[i] === "T") {
      cnt.push(Math.pow(score, 3));
    } else if (dartResult[i] === "*") {
      cnt[cnt.length - 2] = cnt[cnt.length - 2] * 2;
      cnt[cnt.length - 1] = cnt[cnt.length - 1] * 2;
    } else if (dartResult[i] === "#") {
      cnt[cnt.length - 1] = -1 * cnt[cnt.length - 1];
    }
  }

  return cnt.reduce((acc, cur) => acc + cur, 0);
}

let input = [
  // TC: 1
  "1S2D*3T",
  // TC: 2
  "1D2S#10S",

  "1D2S0T	",
  "1S*2T*3S	",
  "1D#2S*3S	",
  "1T2D3D#",
  "1D2S3T*",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
