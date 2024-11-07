// 1. find minimum element in the list and swap it with first element.
// 2. find minimun element during [1, N - 1] and swap it with second element.
// Time Complexity： N^2

function selectSort(originArr) {
  if (originArr.length < 2 || originArr == null) {
    return;
  }
  for (let i = 0; i < originArr.length; i++) {
    // 0 ~ N - 1 | 1 ~ N - 1
    let minIndex = i;
    for (let j = i + 1; j < originArr.length; j++) {
      // i + 1 ~ N - 1 find minimun value
      if (originArr[j] < originArr[minIndex]) {
        minIndex = j;
      }
    }
    swap(originArr, minIndex, i);
  }
  return originArr;
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const input = [10, 4, 8, 9];
console.log(selectSort(input));
