function solution(want, number, discount) {
  let result = 0;
  const wantList = {};
  for (let i = 0; i < want.length; i++) {
    wantList[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 10 + 1; i++) {
    const discountItems = {};
    const day = discount.slice(i, i + 10);

    for (let j = 0; j < day.length; j++) {
      discountItems[day[j]] = discountItems[day[j]] + 1 || 1;
    }
    let isAllDiscount = true;

    for (let j = 0; j < Object.keys(wantList).length; j++) {
      const item = Object.keys(wantList)[j];
      if (!discountItems[item] || discountItems[item] < wantList[item]) {
        isAllDiscount = false;
        break;
      }
    }
    if (isAllDiscount) result++;
  }
  return result;
}

let input = [
  // TC: 1
  [
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ],
  ],
  // TC: 2
  [
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ],
  ],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
