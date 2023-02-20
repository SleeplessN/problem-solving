function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;

  for (let i = 0; i < goal.length; i++) {
    if (cards1[idx1] === goal[i]) idx1++;
    else if (cards2[idx2] === goal[i]) idx2++;
    else return "No";
  }

  return "Yes";
}

let input = [
  // TC: 1
  [
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ],
  // TC: 2
  [
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
