// 0 ~ 0 in order
// 0 ~ 1
// 0 ~ 2
// 0 ~ i

export function InsertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      // always compare j and j + 1 not i.
      // because when i = 6, j = 5, j - 1 = 4 first compare round: 4,5; next compare round is 3 ~ 4, i always is 6
      swap(arr, j, j + 1);
    }
  }
  return arr;
}

function swap(arr, i, j) {
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[j];
  arr[i] = arr[i] ^ arr[j];
}

const input = [10, 4, 8, 9];
console.log(InsertSort(input));
