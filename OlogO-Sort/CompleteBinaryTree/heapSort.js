function heapSort(arr) {
  if (arr.length === null || arr.length < 2) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    heapInsert(arr, i);
  }
  let heapSize = arr.length;
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    heapify(arr, 0, heapSize);
    swap(arr, 0, --heapSize);
  }
  return arr;
}

function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor((index - 1) / 2)]) {
    swap(arr, index, Math.floor((index - 1) / 2));
    index = Math.floor((index - 1) / 2);
  }
}
function heapify(arr, index, heapSize) {
  let leftIndex = 2 * index + 1;
  while (leftIndex < heapSize) {
    let largest =
      leftIndex + 1 < heapSize && arr[leftIndex + 1] > arr[leftIndex]
        ? leftIndex + 1
        : leftIndex;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      break;
    }
    swap(arr, largest, index);
    index = largest;
    leftIndex = 2 * index + 1;
  }
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const test1 = [1, 7, 3, 8, 2, 1, 23, 0, 2];
console.log(heapSort(test1));
