function solution(book_time) {
  book_time.sort();
  const room = [];

  book_time.forEach((t) => {
    const tmp = t[0].split(":");
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = room.findIndex((e) => e <= startTime);

    if (idx === -1) room.push(getNextTime(t[1]));
    else room[idx] = getNextTime(t[1]);
  });

  return room.length;
}

function getNextTime(endTime) {
  const next = endTime.split(":");

  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

let input = [
  // TC: 1
  [
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ],
  // TC: 2
  [
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ],
  // TC: 3
  [
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
