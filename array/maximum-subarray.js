/**
 * https://leetcode.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  // immediately return first element if only one element
  if (nums.length < 2) return nums[0];
  
  // consider: if all values are negative, return the largest value
  let currentSum = Number.MIN_SAFE_INTEGER;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let n of nums) {
    currentSum = Math.max(0, currentSum)
    currentSum += n;
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
