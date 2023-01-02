function solution(operations) {
  const queue = [];
  const list = operations.map((el) => el.split(" "));

  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === "I") queue.push(+list[i][1]);
    else if (list[i][0] === "D" && list[i][1] === "1")
      queue.splice(queue.indexOf(Math.max(...queue)), 1);
    else queue.splice(queue.indexOf(Math.min(...queue)), 1);
  }

  return queue.length === 0 ? [0, 0] : [Math.max(...queue), Math.min(...queue)];
}

let input = [
  // TC: 1
  ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"],
  // TC: 2
  ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
