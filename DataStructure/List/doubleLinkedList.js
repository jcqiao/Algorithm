class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  insertAtHead(v) {
    const node = new Node(v);
    this.size++;
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    return node;
  }
  append(v) {
    const node = new Node(v);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  print() {
    const output = [];
    let current = this.head;
    while (current) {
      output.push(current.value);
      current = current.next;
    }
    return output.join("->");
  }
  printReverse() {
    const output = [];
    let current = this.tail;
    while (current) {
      output.push(current.value);
      current = current.prev;
    }
    return output.join("->");
  }
  delete(value) {
    if (this.head === null) {
      return;
    }

    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.size--;
      return;
    }
    while (current) {
      if (current.value === value) {
        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        }
        if (current === this.tail) {
          this.tail = current.prev;
        }
        this.size--;
        return;
      }
      current = current.next;
    }
  }
}
export { DoubleLinkedList };
