/**
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  let s = new Set(nums);
  return s.size !== nums.length;
};
