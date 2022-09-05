// https://school.programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  let count = 0;
  let minMoves = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    count += Math.min(
      name[i].charCodeAt(0) - "A".charCodeAt(0),
      "Z".charCodeAt(0) - name[i].charCodeAt(0) + 1
    );

    let idx = i + 1;
    while (idx < name.length && name[idx] == "A") idx++;

    minMoves = Math.min(
      minMoves,
      i * 2 + name.length - idx,
      (name.length - idx) * 2 + i
    );
  }

  return count + minMoves;
}

let input = [
  // TC: 1
  "JEROEN",
  // TC: 2
  "JAN",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
