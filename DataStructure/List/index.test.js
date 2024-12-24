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
});
