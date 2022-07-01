// https://leetcode.com/problems/maximum-units-on-a-truck/

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let result = 0;
  boxTypes.sort(([type1, unit1], [type2, unit2]) => {
    return unit2 - unit1;
  });

  for (let i = 0; i < boxTypes.length; i++) {
    if (truckSize === 0) break;
    if (truckSize >= boxTypes[i][0]) {
      result += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      result += truckSize * boxTypes[i][1];
      truckSize = 0;
    }
  }
  return result;
};
