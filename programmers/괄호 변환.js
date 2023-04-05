function solution(p) {
  if (p === "") return "";

  let u, v;
  let cnt = 0;

  const wLen = p.length;
  for (let i = 0; i < wLen; i++) {
    p[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  const uLen = u.length;
  for (let i = 0; i < uLen; i++) {
    u[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) {
      let str = "";
      str += `(${solution(v)})`;
      for (let j = 1; j < uLen - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }

  return u + solution(v);
}

let input = [
  // TC: 1
  "(()())()",
  // TC: 2
  ")(",
  // TC: 3
  "()))((()",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
