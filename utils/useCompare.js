import { generateRandomArray } from "./generateRandomArray.js";
import { InsertSort } from "../simpleSort/InsertSort.js";
function index() {
  const testTime = 500000;
  const maxSize = 100;
  const maxValue = 100;
  const succeed = true;
  for (let i = 0; i < testTime.length; i++) {
    const arr1 = generateRandomArray(maxSize, maxValue);
    const arr2 = structuredClone(arr1);
    InsertSort(arr1);
    comparator(arr2);
    if (!isEqual(arr1, arr2)) {
      console.log("arr1: ", arr1);
      console.log("arr2: ", arr2);
      succeed = false;
      break;
    }
  }
  console.log(succeed ? "Nice!" : "Opps!");
}

function comparator(arr) {
  return arr.sort();
}

function isEqual(arr1, arr2) {
  // Check if both are arrays and have the same length
  if (
    !Array.isArray(arr1) ||
    !Array.isArray(arr2) ||
    arr1.length !== arr2.length
  ) {
    return false;
  }

  // Compare each element in the arrays
  for (let i = 0; i < arr1.length; i++) {
    const val1 = arr1[i];
    const val2 = arr2[i];

    // If both elements are arrays, do a recursive comparison
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!isEqual(val1, val2)) {
        return false;
      }
    }
    // If elements are not arrays, do a strict comparison
    else if (val1 !== val2) {
      return false;
    }
  }

  // If all elements matched
  return true;
}

// if they only contain primitive values
// function isEqual(arr1, arr2) {
//   return (
//     arr1.length === arr2.length &&
//     arr1.every((value, index) => value === arr2[index])
//   );
// }
console.log(index());
