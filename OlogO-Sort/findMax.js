// find max value between [L, R];

function process(arr, L, R) {
  if (L === R) {
    return arr[L];
  }
  const middleIndex = L + ((R - L) >> 1); // L + (R-L)/2 除以2相当于右移一位
  const leftMax = process(arr, L, middleIndex);
  const rightMax = process(arr, middleIndex + 1, R);
  return Math.max(leftMax, rightMax);
}
console.log(process([11, 1, 4, 5, 10, 0, 99], 1, 6));

// Example Walkthrough
// Let's use the example array [11, 1, 4, 5, 10, 0, 99] and call process([11, 1, 4, 5, 10, 0, 99], 1, 6) to find the maximum value between indices 1 and 6.

// First Call: process([11, 1, 4, 5, 10, 0, 99], 1, 6)

// L = 1, R = 6
// middleIndex = 1 + ((6 - 1) >> 1) = 3
// Split the range [1, 6] into two halves: [1, 3] and [4, 6]
// Left Half Call: process([11, 1, 4, 5, 10, 0, 99], 1, 3)

// L = 1, R = 3
// middleIndex = 1 + ((3 - 1) >> 1) = 2
// Split the range [1, 3] into [1, 2] and [3, 3]
// Left-Left Call: process([11, 1, 4, 5, 10, 0, 99], 1, 2)

// L = 1, R = 2
// middleIndex = 1 + ((2 - 1) >> 1) = 1
// Split [1, 2] into [1, 1] and [2, 2]
// Base Cases:

// process([11, 1, 4, 5, 10, 0, 99], 1, 1): Returns arr[1] = 1
// process([11, 1, 4, 5, 10, 0, 99], 2, 2): Returns arr[2] = 4
// Combine Left-Left Results: Math.max(1, 4) = 4

// Left-Right Call: process([11, 1, 4, 5, 10, 0, 99], 3, 3)

// Base case: Returns arr[3] = 5
// Combine Left Half Results: Math.max(4, 5) = 5

// Right Half Call: process([11, 1, 4, 5, 10, 0, 99], 4, 6)

// L = 4, R = 6
// middleIndex = 4 + ((6 - 4) >> 1) = 5
// Split [4, 6] into [4, 5] and [6, 6]
// Right-Left Call: process([11, 1, 4, 5, 10, 0, 99], 4, 5)

// L = 4, R = 5
// middleIndex = 4 + ((5 - 4) >> 1) = 4
// Split [4, 5] into [4, 4] and [5, 5]
// Base Cases:

// process([11, 1, 4, 5, 10, 0, 99], 4, 4): Returns arr[4] = 10
// process([11, 1, 4, 5, 10, 0, 99], 5, 5): Returns arr[5] = 0
// Combine Right-Left Results: Math.max(10, 0) = 10

// Right-Right Call: process([11, 1, 4, 5, 10, 0, 99], 6, 6)

// Base case: Returns arr[6] = 99
// Combine Right Half Results: Math.max(10, 99) = 99

// Final Combine Step: Math.max(5, 99) = 99

// Final Result
// The maximum value between indices 1 and 6 is 99.