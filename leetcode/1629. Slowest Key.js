// https://leetcode.com/problems/slowest-key/

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let map = {};
  let time = [];
  for (let i = 0; i < releaseTimes.length; i++) {
    if (i === 0) {
      time.push(releaseTimes[0]);
    } else {
      time.push(releaseTimes[i] - releaseTimes[i - 1]);
    }
  }
  let keys = keysPressed.split("");
  for (let i = 0; i < keys.length; i++) {
    map[keys[i]] = 0;
  }
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] < time[i]) map[keys[i]] = time[i];
  }
  let tmp = [...Object.entries(map)];
  tmp.sort(([key1, value1], [key2, value2]) => {
    if (value1 === value2) {
      return key2.charCodeAt(0) - key1.charCodeAt(0);
    }
    return value2 - value1;
  });
  return tmp[0][0];
};
