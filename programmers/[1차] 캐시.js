function solution(cacheSize, cities) {
  let result = 0;
  const cache = [];
  if (cacheSize === 0) return 5 * cities.length;
  for (const city of cities) {
    const cityLC = city.toLowerCase();
    if (cache.includes(cityLC)) {
      cache.splice(cache.indexOf(cityLC), 1);
      cache.unshift(cityLC);
      result += 1;
    } else {
      if (cache.length >= cacheSize) cache.pop();
      cache.unshift(cityLC);
      result += 5;
    }
  }
  return result;
}

let input = [
  // TC: 1
  [
    3,
    [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
    ],
  ],
  // TC: 2
  [
    3,
    [
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
      "Jeju",
      "Pangyo",
      "Seoul",
    ],
  ],
  // TC: 3
  [
    2,
    [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ],
  ],
  // TC: 4
  [
    5,
    [
      "Jeju",
      "Pangyo",
      "Seoul",
      "NewYork",
      "LA",
      "SanFrancisco",
      "Seoul",
      "Rome",
      "Paris",
      "Jeju",
      "NewYork",
      "Rome",
    ],
  ],
  // TC: 5
  [2, ["Jeju", "Pangyo", "NewYork", "newyork"]],
  // TC: 6
  [0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
