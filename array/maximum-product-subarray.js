/**
 * https://leetcode.com/problems/maximum-product-subarray/
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = (nums) => {
  // initialize everything to first element
  let max = nums[0];
  let cmax = max;
  let cmin = max;

  for (let i = 1; i < nums.length; i++) {
    // swap because min * -ve > max * -ve
    if (nums[i] < 0) {
      [cmax, cmin] = [cmin, cmax];
    }

    // will always assign to zero if encountered
    cmax = Math.max(cmax * nums[i], nums[i]);
    cmin = Math.min(cmin * nums[i], nums[i]);
    
    // set overall max tracker
    max = Math.max(max, cmax);
  }
  return max;
};
