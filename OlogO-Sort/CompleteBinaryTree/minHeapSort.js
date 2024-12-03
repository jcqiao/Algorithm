function minHeapSort(arr) {
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
}

function heapInsert(arr, i) {
  while (arr[i] < arr[Math.floor((i - 1) / 2)]) {
    swap(arr, i, Math.floor((i - 1) / 2));
    i = Math.floor((i - 1) / 2);
  }
}

function heapify(arr, i, heapSize) {
    
}
function swap(arr, i, j) {
  [arr[j], arr[i]] = [arr[i], arr[j]];
}
