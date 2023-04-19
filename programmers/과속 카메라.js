function solution(routes) {
  let result = 0;
  let preCamera = -30001;

  routes.sort(function (a, b) {
    return a[1] - b[1];
  });

  routes.map((e) => {
    if (e[0] > preCamera) {
      result++;
      preCamera = e[1];
    }
  });

  return result;
}

let input = [
  // TC: 1
  [
    [-20, -15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
