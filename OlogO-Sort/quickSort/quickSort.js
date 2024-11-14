function main(arr) {
  if (arr === null || arr.length <= 1) {
    return arr;
  }
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, l, r) {
  if (l < r) {
    const numIndex = l + Math.floor((r - l + 1) * Math.random());
    console.log("numIndex:", numIndex);
    swap(arr, numIndex, r);
    const [newL, newR] = partition(arr, l, r);
    quickSort(arr, l, newL - 1); // <
    quickSort(arr, newR + 1, r); // >
  }
  console.log("Arr", arr);
}

function partition(arr, l, r) {
  let leftIndex = l - 1;
  let rightIndex = r;
  let i = l; // current index
  while (i < rightIndex) {
    if (arr[i] < arr[r]) {
      swap(arr, ++leftIndex, i++);
    } else if (arr[i] > arr[r]) {
      swap(arr, i, --rightIndex);
    } else {
      i++;
    }
  }
  swap(arr, r, rightIndex);
  console.log("leftIndex", leftIndex, rightIndex);

  return [leftIndex + 1, rightIndex]; // 返回的index是等于num的index
}
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
const test1 = [7, 5, 2, 1, 7, 5, 6, 11, 5, 7];
main(test1);
