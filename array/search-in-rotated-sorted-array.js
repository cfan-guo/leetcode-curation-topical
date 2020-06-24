/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 * constraints: must be O(logn)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// since sorted, but bc rotated, use binary search
const search = (nums, target) => {
  if (nums.length < 2) {
    return nums[0] === target ? 0 : -1;
  }

  let rightIdx = nums.length - 1;
  if (nums[0] < nums[rightIdx]) { // no rotation
    return binarySearch(nums, target, [0, rightIdx]);
  } else { // rotation, find which subarray contains target
    let min = findMin(nums);
    if (target === nums[min]) { // target is mid
      return min;
    } else if (target <= nums[min - 1] && target >= nums[0]) { // target on left side
      return binarySearch(nums, target, [0, mid]);
    } else if (target > nums[min] && target <= nums[rightIdx]) { // target on right side
      return binarySearch(nums, target, [min, rightIdx]);
    } else { // target out of range
      return -1;
    }
  }
};

const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return mid;
    }
    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    if (nums[mid] > nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

const binarySearch = (nums, target, endpoints) => {
  let [left, right] = endpoints;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) { // found
      return mid;
    } else if (nums[mid] < target) { // target on the right
      left = mid + 1;
    } else { // target on the left
      right = mid - 1;
    }
  }
  return -1; // not found
}
