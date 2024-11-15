function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor((index - 1) / 2]) {
    swap(arr, index, Math.floor((index - 1) / 2);
    index = Math.floor((index - 1) / 2;
  }
}

// 某个数在index位置， 能否往下动, heapSize控制堆的大小
function heapify(arr, index, heapSize) {
  let leftIndex = 2 * index + 1;
  while (leftIndex < heapSize) {
    // 左右两个孩子哪个大酒吧下标给largest
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) {
      // largest === index说明父是最大的
      break;
    }
    // 否则交换父子值
    swap(arr, index, largest);
    // arr[index]的值换下来后应该变为子的index
    index = largest;
    // 新的左孩子
    left = 2 * index + 1;
  }
}
