function solution(record) {
  const result = [];
  const map = new Map();

  for (let i = 0; i < record.length; ++i) {
    const [state, uid, name] = record[i].split(" ");
    if (state == "Leave") {
      result.push([uid, "님이 나갔습니다."]);
      continue;
    }
    if (state == "Enter") {
      result.push([uid, "님이 들어왔습니다."]);
    }
    map.set(uid, name);
  }
  return result.map((el) => map.get(el[0]) + el[1]);
}

let input = [
  // TC: 1
  [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
