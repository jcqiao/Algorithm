import { strictEqual, throws } from "assert";
import { Stack } from "./linkedList";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should push a node onto the stack", () => {
    stack.push("node1");
    strictEqual(stack.head.data, "node1");
    strictEqual(stack.head.next, null);
  });

  test("should push multiple nodes onto the stack", () => {
    stack.push("node1");
    stack.push("node2");
    strictEqual(stack.head.data, "node2");
    strictEqual(stack.head.next.data, "node1");
    strictEqual(stack.head.next.next, null);
  });

  test("should pop a node from the stack", () => {
    stack.push("node1");
    const popped = stack.pop();
    strictEqual(popped, "node1");
    strictEqual(stack.head, null);
  });

  test("should pop multiple nodes from the stack", () => {
    stack.push("node1");
    stack.push("node2");
    const popped1 = stack.pop();
    const popped2 = stack.pop();
    strictEqual(popped1, "node2");
    strictEqual(popped2, "node1");
    strictEqual(stack.head, null);
  });

  test("should throw an error when popping from an empty stack", () => {
    throws(
      () => stack.pop(),
      /Stack underflow: Cannot pop from an empty stack/
    );
  });

  test("should peek the top node of the stack", () => {
    stack.push("node1");
    const peeked = stack.peek();
    strictEqual(peeked, "node1");
  });

  test("should throw an error when peeking an empty stack", () => {
    throws(() => stack.peek(), /Stack is empty: Cannot peek/);
  });

  test("should return true when stack is empty", () => {
    strictEqual(stack.isEmpty(), true);
  });

  test("should return false when stack is not empty", () => {
    stack.push("node1");
    strictEqual(stack.isEmpty(), false);
  });
});
