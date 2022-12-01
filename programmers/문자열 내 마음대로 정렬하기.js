function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    else if (a[n] > b[n]) return 1;
    else return a < b ? -1 : 1;
  });
}

let input = [
  // TC: 1
  [["sun", "bed", "car"], 1],
  // TC: 2
  [["abce", "abcd", "cdx"], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
