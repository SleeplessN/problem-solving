function solution(fees, records) {
  const result = [];
  const obj = {};
  const stack = [];
  records = records.map((recode) => recode.split(" "));

  for (let i = 0; i < records.length; i++) {
    if (records[i][2] === "IN") {
      stack.push(records[i]);
    }
    if (records[i][2] === "OUT") {
      let tmp;
      for (let j = 0; j < stack.length; j++) {
        if (records[i][1] === stack[j][1]) {
          tmp = stack[j];
          stack.splice(j, 1);
          break;
        }
      }
      const parkingMinutes =
        timeToMinutes(records[i][0]) - timeToMinutes(tmp[0]);
      obj[records[i][1]] =
        obj[records[i][1]] + parkingMinutes || parkingMinutes;
    }
  }
  if (stack.length > 0) {
    const maxTime = timeToMinutes("23:59");
    for (let i = 0; i < stack.length; i++) {
      const parkingMinutes = maxTime - timeToMinutes(stack[i][0]);
      obj[stack[i][1]] = obj[stack[i][1]] + parkingMinutes || parkingMinutes;
    }
  }
  const entry = Object.entries(obj);
  entry.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < entry.length; i++) {
    if (entry[i][1] <= fees[0]) result[i] = fees[1];
    else
      result[i] =
        fees[1] + Math.ceil((entry[i][1] - fees[0]) / fees[2]) * fees[3];
  }
  return result;
}

function timeToMinutes(time) {
  time = time.split(":").map((n) => +n);
  return time[0] * 60 + time[1];
}

let input = [
  // TC: 1
  [
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ],
  ],
  // TC: 2
  [
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ],
  ],

  [[1, 461, 1, 10], ["00:00 1234 IN"]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
