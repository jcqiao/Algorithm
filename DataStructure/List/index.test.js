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
  let list;

  beforeEach(() => {
    list = new List();
  });

  test("should print an empty list", () => {
    const output = list.print();
    strictEqual(output, "");
  });

  test("should print a list with one node", () => {
    list.append("node1");
    const output = list.print();
    strictEqual(output, "node1");
  });

  test("should print a list with multiple nodes", () => {
    list.append("node1");
    list.append("node2");
    list.append("node3");
    const output = list.print();
    strictEqual(output, "node1 -> node2 -> node3");
  });

  test("should print a list with nodes prepended", () => {
    list.prepend("node1");
    list.prepend("node2");
    list.prepend("node3");
    const output = list.print();
    strictEqual(output, "node3 -> node2 -> node1");
  });

  test("should print a list with nodes inserted", () => {
    list.append("node1");
    list.append("node3");
    list.insert("node2", 1);
    const output = list.print();
    strictEqual(output, "node1 -> node2 -> node3");
  });
});
describe("List.insert()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  test("should insert a node at the beginning of the list", () => {
    list.append("node1");
    list.insert("node0", 0);
    strictEqual(list.head.value, "node0");
    strictEqual(list.head.next.value, "node1");
    strictEqual(list.head.next.next, null);
  });

  test("should insert a node in the middle of the list", () => {
    list.append("node1");
    list.append("node3");
    list.insert("node2", 1);
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.head.next.next.value, "node3");
    strictEqual(list.head.next.next.next, null);
  });

  test("should insert a node at the end of the list", () => {
    list.append("node1");
    list.append("node2");
    list.insert("node3", 2);
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.head.next.next.value, "node3");
    strictEqual(list.head.next.next.next, null);
  });

  test("should not insert a node if the index is out of bounds", () => {
    list.append("node1");
    list.insert("node2", 5);
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
  });
});
describe("list.reverse()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });
  test("should reverse list", () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    const output = list.reverse();
    strictEqual(list.print(output), "4 -> 3 -> 2 -> 1");
  });
});
