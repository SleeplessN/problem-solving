// 1094. Car Pooling

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  let lastLoc = 0;
  for (let i = 0; i < trips.length; i++) {
    if (lastLoc < trips[i][2]) {
      lastLoc = trips[i][2];
    }
  }
  let nowCap = capacity;
  let nowLoc = 0;
  while (nowLoc <= lastLoc) {
    for (let i = 0; i < trips.length; i++) {
      if (trips[i][2] === nowLoc) {
        nowCap += trips[i][0];
      }
    }
    for (let i = 0; i < trips.length; i++) {
      if (trips[i][1] === nowLoc) {
        nowCap -= trips[i][0];
        if (nowCap < 0) return false;
      }
    }
    nowLoc++;
  }
  return true;
};
