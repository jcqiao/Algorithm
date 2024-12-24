import { strictEqual } from "assert";
import { List } from "./list";

describe("List", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  test("should append a node to the list", () => {
    list.append("node1");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
  });

  test("should append multiple nodes to the list", () => {
    list.append("node1");
    list.append("node2");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.head.next.next, null);
  });

  test("should maintain the correct order of nodes", () => {
    list.append("node1");
    list.append("node2");
    list.append("node3");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.head.next.next.value, "node3");
    strictEqual(list.head.next.next.next, null);
  });
  test("should prepend a node to the list", () => {
    list.prepend("node1");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
  });

  test("should prepend multiple nodes to the list", () => {
    list.prepend("node1");
    list.prepend("node2");
    strictEqual(list.head.value, "node2");
    strictEqual(list.head.next.value, "node1");
    strictEqual(list.head.next.next, null);
  });

  test("should maintain the correct order of nodes when prepending", () => {
    list.prepend("node1");
    list.prepend("node2");
    list.prepend("node3");
    strictEqual(list.head.value, "node3");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.head.next.next.value, "node1");
    strictEqual(list.head.next.next.next, null);
  });
});

describe("List.print()", () => {
  let consoleSpy;

  beforeEach(() => {
    // Mock console.log
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    // Restore console.log
    consoleSpy.mockRestore();
  });

  test("should print all values in the list", () => {
    const list = new List();
    list.append(1);
    list.append(2);
    list.append(3);

    list.print();

    // Ensure console.log was called with the correct values
    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);
    expect(consoleSpy).toHaveBeenCalledTimes(3);
  });

  test("should print nothing when the list is empty", () => {
    const list = new List();

    list.print();

    // Ensure console.log was not called
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test("should print a single value when the list has one element", () => {
    const list = new List();
    list.append(42);

    list.print();

    // Ensure console.log was called once with the correct value
    expect(consoleSpy).toHaveBeenCalledWith(42);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
