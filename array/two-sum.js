/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let map = new Map();
  for (const [i, v] of nums.entries()) {
    if (map.has(v)) {
      return [map.get(v), i];
    }
    map.set(target-v, i);
  }
}
