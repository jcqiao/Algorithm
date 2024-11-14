// There is an array and a number. Please find numbers <= num and put them into the right of arr, then > num put them into the left of arr; Nlog(N)

// Process
// 1. arr[i] <= num left part; swap(arr, leftpartIndex+1, i) swap the next leftpartindex value and i;
// 2. arr[i] > num i++;

function process1(arr, num) {
  let leftpartIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= num) {
      swap(arr, leftpartIndex++, i);
    }
  }
  return arr;
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const test1 = [5, 4, 3, 2, 1];
// console.log(process1(test1, 3));

// [<, =, >]
// 1. leftIndex; arr[i] < num; swap(arr, leftIndex++, i++);
// 2. rightIndex; arr[i] > num; swap(arr, i, rightIndex--) i don't change because we need check arr[i] ? num after swap
// 3. left is equal to num i++

function process2(arr, num) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let i = 0;
  while (i <= rightIndex) {
    if (arr[i] < num) {
      swap(arr, leftIndex++, i++);
    } else if (arr[i] > num) {
      swap(arr, rightIndex--, i); // we need check i after swap
    } else {
      i++;
    }
  }
  return arr;
}

const test2 = [7, 3, 4, 4, 4, 2, 1, 5, 6];
console.log(process2(test2, 4));
