function solution(t, p) {
  const len = p.length;
  const list = [];
  for (let i = 0; i < t.length; i++) {
    list.push(t.slice(i, i + len));
  }

  return list
    .filter((str) => str.length === len)
    .map((str) => +str)
    .filter((num) => num <= +p).length;
}

let input = [
  // TC: 1
  ["3141592", "271"],
  // TC: 2
  ["500220839878", "7"],
  // TC: 3
  ["10203", "15"],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
