function solution(dirs) {
  const move = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  let position = [0, 0];
  const route = new Set();

  for (let dir of dirs) {
    const positionX = position[0] + move[dir][0];
    const positionY = position[1] + move[dir][1];

    if (positionX > 5 || positionX < -5 || positionY > 5 || positionY < -5)
      continue;

    route.add("" + position[0] + position[1] + positionX + positionY);
    route.add("" + positionX + positionY + position[0] + position[1]);

    position = [positionX, positionY];
  }

  return route.size / 2;
}

let input = [
  // TC: 1
  "ULURRDLLU",
  // TC: 2
  "LULLLLLLU",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
