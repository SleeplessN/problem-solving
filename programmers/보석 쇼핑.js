function solution(gems) {
  const count = new Set(gems).size;
  const gemMap = new Map();
  let result = [1, gems.length];
  gems.forEach((gem, i) => {
    gemMap.delete(gem);
    gemMap.set(gem, i);
    if (gemMap.size === count) {
      const cand = [gemMap.values().next().value + 1, i + 1];
      result = result[1] - result[0] > cand[1] - cand[0] ? cand : result;
    }
  });

  return result;
}

let input = [
  // TC: 1
  ["DIA", "RUBY", "RUBY", "DIA", "DIA", "EMERALD", "SAPPHIRE", "DIA"],
  // TC: 2
  ["AA", "AB", "AC", "AA", "AC"],
  // TC: 3
  ["XYZ", "XYZ", "XYZ"],
  // TC: 4
  ["ZZZ", "YYY", "NNNN", "YYY", "BBB"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
