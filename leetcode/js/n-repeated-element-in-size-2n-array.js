/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }
};
