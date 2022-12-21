function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let seconds = 0;
  do {
    seconds++;
    bridge.pop();
    bridge.reduce((a, b) => a + b) + truck_weights[0] <= weight
      ? bridge.unshift(truck_weights.shift())
      : bridge.unshift(0);
  } while (bridge.reduce((a, b) => a + b) !== 0);
  return seconds;
}

let input = [
  // TC: 1
  [2, 10, [7, 4, 5, 6]],
  // TC: 2
  [100, 100, [10]],
  // TC: 3
  [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
