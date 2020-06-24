/**
 * https://leetcode.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */

// runtime O(n^2) more or less?
// modified from https://en.wikipedia.org/wiki/3SUM#Quadratic_algorithm
// due to potential duplicates in the array (values not distinct)
const threeSum = (nums) => {
  // sort the list to handle duplicates later
  nums = nums.sort((a, b) => a - b);
  let triplets = [];

  // iterate to the third last element,
  // because third last, second last, last form last potential triplet
  for (let i = 0; i < nums.length - 2; i++) {
    // removes duplicates from inital "target"
    if (i && nums[i] === nums[i - 1]) { continue; }

    let a = nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // for each target, iterate through remaining values to find triplet
    while (left < right) {
      let b = nums[left];
      let c = nums[right];
      let sum = a + b + c;

      // if triplet found, add to array and update pointers
      // if triplet is too small, increment left end pointer
      // if triplet too large, decrement right end pointer
      if (sum === 0) {
        triplets.push([a, b, c]);

        // remove duplicates from left and right sides before updating pointers
        while (left < right && nums[left + 1] === nums[left]) { left += 1; }
        while (left < right && nums[right - 1] === nums[right]) { right -= 1; }
        left += 1;
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  return triplets;
};

// Directly uses same concepts as twosum, but does not handle dupes
// i.e. a whole trap
const threeSumPartial = (nums) => {
  let triplets = [];
  for (let i = 0; i < nums.length; i++) {
    let map = {};
    for (let j = i + 1; j < nums.length; j++) {
      let difference = nums[j] === 0 ? -1 * nums[i] : nums[i] - nums[j];
      if (typeof(map[nums[j]]) !== "undefined") {
        triplets.push([nums[i], map[nums[j]], nums[j]]);
      } else {
        map[difference] = nums[j];
      }
    }
  }
  return triplets;
}
