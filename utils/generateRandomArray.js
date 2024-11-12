export function generateRandomArray(maxSize, maxValue) {
  const size = Math.floor(Math.random() * (maxSize + 1));
  const arr = Array.from({ length: size }, () =>
    Math.floor(Math.random() * (maxValue + 1))
  );
  return arr;
}
// Example usage:
const maxSize = 10; // Maximum array length
const maxInteger = 50; // Maximum integer value in the array
const randomArr = generateRandomArray(maxSize, maxInteger);
console.log(randomArr);
