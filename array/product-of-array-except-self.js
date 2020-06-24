/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * Constraints: O(n), O(1) memory (not including output array), no division
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  let products = [1];

  // track product of elements to the left of i
  for (let i = 1; i < nums.length; i++) {
    products[i] = products[i-1] * nums[i-1];
  }

  // track product of elements to the right of i
  let rightMultiplier = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] = products[i] * rightMultiplier;
    rightMultiplier *= nums[i];
  }

  return products;
};
