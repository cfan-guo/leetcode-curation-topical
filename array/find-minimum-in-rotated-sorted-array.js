/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */

// O(logn)
// since sorted, but bc rotated, use binary search
const findMin = (nums) => {
  // if one element or no rotation
  if (nums.length < 2 || nums[0] < nums[nums.length - 1]) { return nums[0]; }

  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    // check if min is around midpoint
    if (nums[mid - 1] > nums[mid] ) {
      return nums[mid];
    }
    if (nums[mid + 1] < nums[mid]) {
      return nums[mid + 1];
    }

    // not found at midpoint, change endpoints
    if (nums[mid] > nums[0]) { // check right side
      left = mid + 1;
    } else { // check left side
      right = mid - 1;
    }
  }
}

// O(n)
// const findMin = (nums) => {
//   let min = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > nums[i]) {
//       min = nums[i];
//     }
//   }
//   return min;
// }

// O(nlogn), depending on engine
// const findMin = (nums) => {
//   return nums.reduce((s, x) => s = Math.min(s, x))
// }
