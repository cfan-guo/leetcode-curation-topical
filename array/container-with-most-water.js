/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

// O(n) time O(1) space
// Operating on the assumption that the max area is limited by
// the shorter height, and the distance between them.
// Starting from the two ends (i.e. max distance), set as max area
// and compare by moving end pointers closer to each other based on
// which end pointer is limiting the height more
const maxArea = (height) => {
  if (height.length === 2) { return Math.min(height[0], height[1]); }

  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let distance = right - left;
    let area = Math.min(height[left], height[right]) * distance;
    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }
  return maxArea;
};

// brute force solution O(n^2)
// scan from left to right
// set each height in the outer loop as fixed, find distance to height in inner loop
// find area by multiplying distance with smaller of two heights
// compare with previous maximum height
const maxAreaBrute = (height) => {
    if (height.length === 2) { return Math.min(height[0], height[1]); }
    let maxArea = 0;
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const dist = j - i;
            const currentHeight = Math.min(height[i], height[j]);
            const currentArea = dist * currentHeight;
            maxArea = Math.max(currentArea, maxArea);
        }
    }
    return maxArea;
};
