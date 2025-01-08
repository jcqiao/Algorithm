export function reverseString1(str) {
  if (str.length === 0) {
    return null;
  }
  return str.split("").reverse().join("");
}
/**
 * Reverse a string using two pointer
 * @param {String} str
 * @returns string
 */
export function reverseString2(str) {
  if (str.length === 0) {
    return null;
  }
  let pre = 0;
  let last = str.length - 1;
  let res = str;
  while (pre < last) {
    res = swapStr(res, pre++, last--);
  }
  return res;
}
function swapStr(str, i, j) {
  const arr = str.split("");
  [arr[j], arr[i]] = [arr[i], arr[j]];
  return arr.join("");
}
// console.log(reverseString1("hello"));
// console.log(reverseString2("hello"));

/**
 * Reverse a string using stack
 * @param {String} str - Input a string
 * @returns {String} res - Already reversed string
 */
export function reverseString3(str) {
  if (str.length === 0) {
    return null;
  }
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }
  let res = "";
  while (stack.length) {
    res += stack.pop();
  }
  return res;
}
// console.log(reverseString3("hello"));

/**
 * Reverse a string using recursion
 * @param {String} str
 * @returns {String} Each recursive call contributes one charactrer to the reversed result
 */
export function reverseString4(str) {
  if (str.length === 1) {
    return str;
  }
  let res = reverseString4(str.slice(1));
  res += str[0];
  return res;
}
/**
 * Reverses the given string using the `reduceRight` method.
 *
 * The function splits the input string into an array of characters, then iterates
 * through the array from right to left using `reduceRight`. It concatenates
 * the characters in reverse order to form the reversed string.
 *
 * @param {String} str - The string to be reversed.
 * @returns {String} - The reversed string.
 *
 * @example
 * reverseString5("hello"); // Returns "olleh"
 *
 * @throws {TypeError} - If the input is not a string.
 */
export function reverseString5(str) {
  return str.split("").reduceRight((pre, cur) => pre + cur, "");
}
console.log(reverseString4("hello"));
console.log(reverseString5("hello"));
