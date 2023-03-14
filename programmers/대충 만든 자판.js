function solution(keymap, targets) {
  let result = [];
  let pressKey = 0;

  targets.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      let count = Infinity;
      keymap.forEach((key) => {
        let idx = key.indexOf(el[i]);

        if (idx > -1) {
          count = Math.min(count, idx + 1);
        }
      });
      pressKey += count;
    }
    result.push(pressKey);
    pressKey = 0;
  });
  result = result.map((el) => {
    if (el == Infinity) {
      el = -1;
    }
    return el;
  });

  return result;
}

let input = [
  // TC: 1
  [
    ["ABACD", "BCEFD"],
    ["ABCD", "AABB"],
  ],
  // TC: 2
  [["AA"], ["B"]],
  // TC: 3
  [
    ["AGZ", "BSSS"],
    ["ASA", "BGZ"],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
