function solution(name, yearning, photo) {
  return photo.map((cur, idx) => {
    const rowScore = cur.map((el) => {
      const yearningIdx = name.indexOf(el);
      return yearningIdx !== -1 ? yearning[yearningIdx] : 0;
    });

    return rowScore.reduce((acc, el, idx) => acc + el, 0);
  }, 0);
}

let input = [
  // TC: 1
  [
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
      ["may", "kein", "kain", "radi"],
      ["may", "kein", "brin", "deny"],
      ["kon", "kain", "may", "coni"],
    ],
  ],
  // TC: 2
  [
    ["kali", "mari", "don"],
    [11, 1, 55],
    [
      ["kali", "mari", "don"],
      ["pony", "tom", "teddy"],
      ["con", "mona", "don"],
    ],
  ],
  // TC: 3
  [
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
