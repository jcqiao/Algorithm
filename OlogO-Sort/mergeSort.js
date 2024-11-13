// [3,2,1,4,5,2]
// 1. [3,2,1] [4,5,2] divide into two parts
// 2. [1,2,3] [2,4,5]
// 3. prepare another arr[], then compare the same index, copy the minValue into it;

function mergeSort(arr, L, mid, R) {
  const res = [];
  let p1 = L;
  let p2 = mid + 1;
  let i = 0;
  while (p1 <= mid && p2 <= R) {
    // ensure index is in bounds
    res[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= mid) {
    // p1 isn't out of boundaries
    res[i++] = arr[p1++];
  }
  while (p2 <= R) {
    res[i++] = arr[p2++];
  }
  for (let i = 0; i < res.length; i++) {
    arr[L + i] = res[i];
  }
}
// process function: sort array
function process(arr, L, R) {
  if (L === R) {
    return;
  }
  const midIndex = L + ((R - L) >> 1);
  process(arr, L, midIndex);
  process(arr, midIndex + 1, R);
  mergeSort(arr, L, midIndex, R);
  console.log("arr", arr);
}
process([3, 2, 1, 4, 5, 2], 0, 5);

// NlogN

// Process:
// Step 1:
//                P(0,5)
//            /            \
//        P(0,2)          P(3,5)
//       /      \        /       \
//   P(0,1)    P(2,2)  P(3,4)   P(5,5)
//   /     \           /    \
// P(0,0)  P(1,1)    P(3,3) P(4,4)

// Step 2
// P(0,0) L===R return  process(arr, L, midIndex);
// P(1,1) L===R return  process(arr, midIndex + 1, R);
// mergeSort => [2,3] sort in [0,1]
//
//                       P(0,5)
//                   / \           \
//  M [1,2,3]     P(0,2)          P(3,5)
//              /\      /\        /       \
//  M [2,3] P(0,1)    P(2,2)  P(3,4)   P(5,5)
//           / \   / \           /    \
//         p(0,0)  p(1,1)    P(3,3) P(4,4)
