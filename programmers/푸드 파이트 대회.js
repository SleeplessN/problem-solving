function solution(food) {
  let result = "";
  const foodList = {};

  for (let i = 1; i < food.length; i++) {
    foodList[i] = parseInt(food[i] / 2);
  }

  for (let i = 0; i < Object.keys(foodList).length; i++) {
    const [foodType, amount] = Object.entries(foodList)[i];
    result += foodType.repeat(amount);
  }
  result += "0";
  for (let i = Object.keys(foodList).length - 1; i >= 0; i--) {
    const [foodType, amount] = Object.entries(foodList)[i];
    result += foodType.repeat(amount);
  }

  return result;
}

let input = [
  // TC: 1
  [1, 3, 4, 6],
  // TC: 2
  [1, 7, 1, 2],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(solution(input[i]));
}
