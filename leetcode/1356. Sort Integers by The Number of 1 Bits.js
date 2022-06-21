// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => a - b);
  let map = {};
  let order = [];
  for (let i = 0; i < arr.length; i++) {
    let bin = arr[i].toString(2).split("");
    map[arr[i]] = 0;
    for (let j = 0; j < bin.length; j++) {
      if (bin[j] === "1") map[arr[i]]++;
    }
    order.push(arr[i]);
  }

  order.sort((a, b) => map[a] - map[b]);
  return order;
};
