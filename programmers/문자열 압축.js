function solution(s) {
  let result = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = "";
    let cnt = 1;
    let tempStr = s.substr(0, i);
    let idx = 0;

    for (idx = i; idx <= s.length; idx += i) {
      let nextStr = s.substr(idx, i);

      if (tempStr === nextStr) {
        cnt += 1;
      } else {
        if (cnt === 1) str = str + tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
      }
    }
    if (cnt === 1) str = str + tempStr;
    else str = str + cnt + tempStr;
    result = Math.min(result, str.length);
  }

  return result;
}

let input = [
  // TC: 1
  "aabbaccc",
  // TC: 2
  "ababcdcdababcdcd",
  // TC: 3
  "abcabcdede",
  // TC: 4
  "abcabcabcabcdededededede",
  // TC: 5
  "xababcdcdababcdcd",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
