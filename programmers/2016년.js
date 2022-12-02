function solution(a, b) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const dateStr = "2016-" + a + "- " + b;
  const date = new Date(dateStr);
  return week[date.getDay()];
}

let input = [
  // TC: 1
  [5, 24],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
