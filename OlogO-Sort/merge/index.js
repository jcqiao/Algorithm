// function process(arr, L, R) {
//   if (L === R) {
//     return;
//   }
//   const mid = L + ((R - L) >> 1);
//   process(arr, L, mid);
//   process(arr, mid + 1, R);
//   mergeSort(arr, L, mid, R);
//   return arr;
// }

// function mergeSort(arr, L, M, R) {
//   let p1 = L;
//   let p2 = M + 1;
//   const res = [];
//   let i = 0;
//   while (p1 <= M && p2 <= R) {
//     res[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
//   }
//   while (p1 <= M) {
//     res[i++] = arr[p1++];
//   }
//   while (p2 <= R) {
//     res[i++] = arr[p2++];
//   }
//   for (let i = 0; i < res.length; i++) {
//     arr[L + i] = res[i];
//   }
// }
// console.log(process([3, 2, 1, 4, 5, 2], 0, 5));

function process(arr, L, R) {
  if (L === R) {
    return 0;
  }
  const M = L + ((R - L) >> 1);
  return process(arr, L, M) + process(arr, M + 1, R) + merge(arr, L, M, R);
}
function merge(arr, L, M, R) {
  let p1 = L;
  let p2 = M + 1;
  let i = 0;
  const res = [];
  let sum = 0;
  while (p1 <= M && p2 <= R) {
    sum += arr[p1] < arr[p2] ? arr[p1] * (R - p2 + 1) : 0;
    res[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= M) {
    res[i++] = arr[p1++];
  }
  while (p2 <= R) {
    res[i++] = arr[p2++];
  }
  for (let i = 0; i < res.length; i++) {
    arr[L + i] = res[i];
  }
  return sum
}
function smallSum(arr) {
  return process(arr, 0, arr.length - 1);
}
const arr = [1, 3, 4, 2, 5];
console.log(smallSum(arr));
