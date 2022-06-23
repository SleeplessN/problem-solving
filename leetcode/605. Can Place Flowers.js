// https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let canPlant = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let left = flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined;
    let right = flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined;
    if (left && right && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      canPlant++;
    }
  }
  return canPlant >= n ? true : false;
};
