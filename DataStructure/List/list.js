class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.size = 0;
    this.reverseList = null;
  }
  append(value) {
    const newNode = new Node(value);
    this.size++;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      // find the last node O(N)
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    this.size++;
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.join(" -> ");
  }
  insert(value, index = this.size) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    this.size++;
    const newNode = new Node(value);
    let current = this.head;
    let i = 0;
    let previousNode = null;
    while (i < index && current) {
      previousNode = current;
      current = current.next;
      i++;
    }
    previousNode.next = newNode;
    newNode.next = current;
  }
  delete(index) {
    if (index < 0 || index >= this.size) {
      console.log("Invalid index");
      return;
    }
    this.size--;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = current.next;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  reverseWithRecursive(node = this.head) {
    if (node === null || node.next === null) {
      this.head = node;
      return node;
    }
    const newHead = this.reverseWithRecursive(node.next);
    node.next.next = node;
    node.next = null;
    return newHead;
  }
}

const list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.reverseWithRecursive(list.head);
console.log(list.print());

export { List };
