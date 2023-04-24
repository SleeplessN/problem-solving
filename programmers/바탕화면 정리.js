function solution(wallpaper) {
  let result = [0, 0, 0, 0];
  let index = [];

  wallpaper = wallpaper
    .map((v, i) => {
      const idx = v.indexOf("#");
      const lastIndex = v.lastIndexOf("#") + 1;
      const check = v.includes("#");
      if (check) index.push(idx, lastIndex);

      return check && i;
    })
    .filter((v) => v !== false);

  result[0] = Math.min(...wallpaper);
  result[2] = Math.max(...wallpaper) + 1;
  result[1] = Math.min(...index);
  result[3] = Math.max(...index);

  return result;
}

let input = [
  // TC: 1
  [".#...", "..#..", "...#."],
  // TC: 2
  ["..........", ".....#....", "......##..", "...##.....", "....#....."],
  // TC: 3
  [
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ],
  // TC: 4
  ["..", "#."],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
