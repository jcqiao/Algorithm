function reverseString(str) {
  if (str.length === 0) {
    return;
  }
  const stack = [];
  for (const char of str) {
    stack.push(char);
  }
  let reverse = "";
  while (stack.length > 0) {
    reverse += stack.pop();
  }
  return reverse;
}
console.log(reverseString("hello"));
