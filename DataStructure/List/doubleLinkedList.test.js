import { strictEqual } from "assert";
import { DoubleLinkedList } from "./doubleLinkedList";

describe("DoubleLinkedList", () => {
  let list;

  beforeEach(() => {
    list = new DoubleLinkedList();
  });

  test("should insert a node at the head", () => {
    list.insertAtHead("node1");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
    strictEqual(list.tail.value, "node1");
  });

  test("should append a node to the list", () => {
    list.append("node1");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
    strictEqual(list.tail.value, "node1");
  });

  test("should append multiple nodes to the list", () => {
    list.append("node1");
    list.append("node2");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next.value, "node2");
    strictEqual(list.tail.value, "node2");
  });

  test("should print the list", () => {
    list.append("node1");
    list.append("node2");
    const output = list.print();
    strictEqual(output, "node1->node2");
  });

  test("should print the list in reverse", () => {
    list.append("node1");
    list.append("node2");
    const output = list.printReverse();
    strictEqual(output, "node2->node1");
  });

  test("should delete a node from the list", () => {
    list.append("node1");
    list.append("node2");
    list.delete("node1");
    strictEqual(list.head.value, "node2");
    strictEqual(list.head.prev, null);
  });

  test("should delete the tail node from the list", () => {
    list.append("node1");
    list.append("node2");
    list.delete("node2");
    strictEqual(list.tail.value, "node1");
    strictEqual(list.tail.next, null);
  });

  test("should handle deleting a non-existent node", () => {
    list.append("node1");
    list.delete("node2");
    strictEqual(list.head.value, "node1");
    strictEqual(list.head.next, null);
  });

  test("should handle deleting from an empty list", () => {
    list.delete("node1");
    strictEqual(list.head, null);
  });
});
