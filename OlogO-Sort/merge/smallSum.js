// Using mergeSort to find small sum of array

function process(arr, L, R) {
  if (L === R) {
    return 0;
  }
  let mid = L + ((R - L) >> 1);

  return (
    process(arr, L, mid) + process(arr, mid + 1, R) + mergeSort(arr, L, mid, R)
    // left smallsum + right smallsum + left and right merge smallsum
  );
}
function mergeSort(arr, L, M, R) {
  let P1 = L;
  let P2 = M + 1;
  let i = 0;
  let sum = 0;
  const res = [];
  while (P1 <= M && P2 <= R) {
    sum += arr[P1] < arr[P2] ? arr[P1] * (R - P2 + 1) : 0;
    res[i++] = arr[P1] < arr[P2] ? arr[P1++] : arr[P2++];
    // when value is equal, must copy right value first, then we can find how many numbers will greater than left
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

function smallSum(arr) {
  return process(arr, 0, arr.length - 1);
}
const arr = [1, 3, 4, 2, 5];
console.log(smallSum(arr));
