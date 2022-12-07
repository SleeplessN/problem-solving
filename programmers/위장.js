function solution(clothes) {
  let result = 1;
  const clothesType = {};
  for (const arr of clothes) clothesType[arr[1]] = clothesType[arr[1]] + 1 || 1;
  for (const part in clothesType) result *= clothesType[part] + 1;
  return result - 1;
}

let input = [
  // TC: 1
  [
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ],
  // TC: 2
  [
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
