function solution(order) {
  let idx = 0;
  const sub = [];
  for (let i = 1; i <= order.length; i++) {
    sub.push(i);
    while (sub.length > 0 && sub[sub.length - 1] === order[idx]) {
      sub.pop();
      idx++;
    }
  }
  return idx;

  // 시간 초과
  // const mainContainer = Array.from({ length: order.length }, (_, i) => i + 1);
  // const subContainer = [];
  // let truck = [];

  // for (let i = 0; i < order.length; i++) {
  //   if (mainContainer.includes(order[i])) {
  //     while (mainContainer[0] !== order[i]) {
  //       subContainer.push(mainContainer.shift());
  //     }
  //     mainContainer.shift();
  //   } else if (subContainer[subContainer.length - 1] === order[i]) {
  //     truck.push(subContainer.pop());
  //   } else break;
  // }
  // return truck.length;
}

let input = [
  // TC: 1
  [4, 3, 1, 2, 5],
  // TC: 2
  [5, 4, 3, 2, 1],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
