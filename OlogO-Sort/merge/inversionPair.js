// Find the number of inversion pairs in an array.

function process(arr, L, R) {
  if (L === R) {
    return 0;
  }
  let mid = L + ((R - L) >> 1);

  return (
    process(arr, L, mid) + process(arr, mid + 1, R) + mergeSort(arr, L, mid, R)
    // left inversion pairs + right inversion pairs + left and right merge inversion pairs
  );
}
function mergeSort(arr, L, M, R) {
  let P1 = L;
  let P2 = M + 1;
  let i = 0;
  let sum = 0;
  const res = [];
  while (P1 <= M && P2 <= R) {
    sum += arr[P1] > arr[P2] ? M - P1 + 1 : 0;
    res[i++] = arr[P1] <= arr[P2] ? arr[P1++] : arr[P2++];
    // when value is equal, must copy left value first, then we can find how many numbers will greater than left
  }
  while (P1 <= M) {
    res[i++] = arr[P1++];
  }
  while (P2 <= R) {
    res[i++] = arr[P2++];
  }
  for (let i = 0; i < res.length; i++) {
    arr[L + i] = res[i];
  }
  return sum;
}

function inversionPair(arr) {
  return process(arr, 0, arr.length - 1);
}
const arr = [1, 3, 4, 2, 5];
const test2 = [5, 4, 3, 2, 1];
console.log("Number of inversion pairs:", inversionPair(test2));
