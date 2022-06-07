function solution(prices, fee) {
  let cash = 0;
  let hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
    console.log(`cash : ${cash} / hold : ${hold}`);
  }
  return cash;
}

let input = [
  // TC: 1
  [[1, 3, 2, 8, 4, 9], 2],
  // TC: 2
  [[1, 3, 7, 5, 10, 3], 3],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1])}`);
}
