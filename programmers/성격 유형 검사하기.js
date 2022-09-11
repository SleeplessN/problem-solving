function solution(survey, choices) {
  let result = "";
  const type = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const map = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      map[survey[i][0]] = map[survey[i][0]] + 4 - choices[i] || 1;
    } else if (choices[i] > 4) {
      map[survey[i][1]] = map[survey[i][1]] + choices[i] - 4 || 1;
    }
  }

  for (let i = 0; i < type.length; i++) {
    result += map[type[i][0]] >= map[type[i][1]] ? type[i][0] : type[i][1];
  }
  return result;
}

let input = [
  // TC: 1
  [
    ["AN", "CF", "MJ", "RT", "NA"],
    [5, 3, 2, 7, 5],
  ],
  // TC: 2
  [
    ["TR", "RT", "TR"],
    [7, 1, 3],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
