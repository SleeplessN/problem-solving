function solution(a) {
  let result = 1;
  let startIdx = 0;
  let endIdx = a.length - 1;
  let start = a[startIdx];
  let end = a[endIdx];

  while (startIdx < endIdx) {
    if (start > end) {
      if (start > a[++startIdx]) {
        result++;
        start = a[startIdx];
      }
    }
    if (start < end) {
      if (end > a[--endIdx]) {
        result++;
        end = a[endIdx];
      }
    }
  }

  return result;
}

let input = [
  // TC: 1
  [9, -1, -5],
  // TC: 2
  [-16, 27, 65, -2, 58, -92, -71, -68, -61, -33],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
