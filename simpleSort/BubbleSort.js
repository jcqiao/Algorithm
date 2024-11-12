// Round 1: 0 ~ N - 1:
// 1. find maximun value during [0, 1] and put it at right
// 2. find maximun value during [1, 2] and put it at right
// ...
// N - 1. Is maximun value at N - 1

// Round 2: 0 ~ N - 2 Repeated.

function bubbleSort(arr) {
  if (arr.length < 2 || arr === null) {
    return;
  }
  for (let e = arr.length - 1; e > 0; e--) {
    // 0 ~ e
    for (let i = 0; i < e; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
}

function swap(arr, i, j) { // a b在内存里是两个独立的区域 值可以一样； 内存会抹成0
  arr[i] = arr[i] ^ arr[j];
  arr[j] = arr[i] ^ arr[i];
  arr[i] = arr[i] ^ arr[j];
}

//  ^ 无进位相加 
//  性质
// 1. 0 ^ N = N N ^ N = 0
// 2. 交换结合律