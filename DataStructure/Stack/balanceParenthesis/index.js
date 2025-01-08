export function balanceParenthesis(str) {
  if (typeof str !== "string" || str.length === 0) {
    throw new Error("Input must be a non-empty string");
  }

  const stack = [];
  const map = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);
  for (const char of str) {
    if (map.has(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0 || map.get(stack.pop()) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
