class Node {
  constructor(v) {
    this.data = v;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.head = null;
  }
  push(v) {
    const newNode = new Node(v);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: Cannot pop from an empty stack");
    }
    const tmp = this.head;
    this.head = tmp.next;
    return tmp.data;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty: Cannot peek");
    }
    return this.head.data;
  }
  isEmpty() {
    return this.head === null;
  }
}
