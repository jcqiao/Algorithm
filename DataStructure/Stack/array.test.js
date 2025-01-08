import { strictEqual, deepStrictEqual, throws } from "assert";
import { Stack } from "./array";

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("constructor", () => {
    test("should initialize an empty stack", () => {
      strictEqual(stack.top, -1);
      deepStrictEqual(stack.stack, []);
    });
  });

  describe("push", () => {
    test("should push elements onto the stack", () => {
      stack.push(10);
      stack.push(20);
      strictEqual(stack.top, 1);
      deepStrictEqual(stack.stack, [10, 20]);
    });
  });

  describe("pop", () => {
    test("should pop elements from the stack", () => {
      stack.push(10);
      stack.push(20);
      const popped = stack.pop();
      strictEqual(popped, 20);
      strictEqual(stack.top, 0);
      deepStrictEqual(stack.stack, [10]);
    });

    test("should throw an error when popping from an empty stack", () => {
      throws(
        () => stack.pop(),
        /Stack underflow: Cannot pop from an empty stack/
      );
    });
  });

  describe("peek", () => {
    test("should peek the top element of the stack", () => {
      stack.push(10);
      stack.push(20);
      const top = stack.peek();
      strictEqual(top, 20);
    });

    test("should throw an error when peeking an empty stack", () => {
      throws(() => stack.peek(), /Stack is empty: Cannot peek/);
    });
  });

  describe("isEmpty", () => {
    test("should return true for an empty stack", () => {
      strictEqual(stack.isEmpty(), true);
    });

    test("should return false for a non-empty stack", () => {
      stack.push(10);
      strictEqual(stack.isEmpty(), false);
    });
  });

  describe("print", () => {
    test("should print the stack", () => {
      stack.push(10);
      stack.push(20);
      deepStrictEqual(stack.print(), [10, 20]);
    });
  });
});
