function solution(files) {
  let result = [];
  const numberRegex = /[0-9]+/;
  result = files.sort((a, b) => {
    const [matchA, matchB] = [a.match(numberRegex), b.match(numberRegex)];
    const [headA, headB] = [
      a.slice(0, matchA.index).toLowerCase(),
      b.slice(0, matchB.index).toLowerCase(),
    ];
    const [numberA, numberB] = [parseInt(matchA[0]), parseInt(matchB[0])];
    return headA < headB
      ? -1
      : headA > headB
      ? 1
      : numberA < numberB
      ? -1
      : numberA > numberB
      ? 1
      : 0;
  });
  return result;
}

let input = [
  // TC: 1
  ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"],
  // TC: 2
  [
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
