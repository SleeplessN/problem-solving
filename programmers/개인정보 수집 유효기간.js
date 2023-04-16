function solution(today, terms, privacies) {
  const result = [];
  const expire = new Date(today);
  const termType = {};
  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termType[type] = Number(term);
  });

  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const chDate = new Date(date);

    chDate.setMonth(chDate.getMonth() + termType[type]);

    if (chDate <= expire) result.push(idx + 1);
  });

  return result;
}

let input = [
  // TC: 1
  [
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"],
  ],
  // TC: 2
  [
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
