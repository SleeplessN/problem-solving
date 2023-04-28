function solution(n, stations, w) {
  let result = 0;
  let station;

  if (stations.length == 0) {
    station = n + w + 1;
  }
  station = stations.shift();

  let i = 1;
  while (i <= n) {
    if (station - w > i) {
      let m = Math.ceil((station - w - i) / (2 * w + 1));
      i = station + w + 1;
      result += m;
    }

    if (station - w <= i) {
      i = station + w + 1;
      if (stations.length) {
        station = stations.shift();
      } else {
        station = n + w + 1;
      }
    }
  }

  return result;
}

let input = [
  // TC: 1
  [11, [4, 11], 1],
  // TC: 2
  [16, [9], 2],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${solution(input[i][0], input[i][1], input[i][2])}`);
}
