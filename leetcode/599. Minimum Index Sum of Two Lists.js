// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let choice = [];
  let result = [];
  for (let i = 0; i < list1.length; i++) {
    if (list2.includes(list1[i])) {
      let tmp = [i + list2.indexOf(list1[i]), list1[i]];
      choice.push(tmp);
    }
  }
  choice.sort((a, b) => a[0] - b[0]);
  let minSum = choice[0][0];
  result.push(choice[0][1]);
  for (let i = 1; i < choice.length; i++) {
    if (choice[i][0] === minSum) {
      result.push(choice[i][1]);
    } else {
      break;
    }
  }
  return result;
};
