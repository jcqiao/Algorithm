export class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }
  push(v) {
    this.stack[++this.top] = v;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow: Cannot pop from an empty stack");
    }
    // release the memory
    this.top--;
    return this.stack.splice(this.top + 1, 1)[0];
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty: Cannot peek");
    }
    return this.stack[this.top];
  }
  isEmpty() {
    return this.top < 0;
  }
  print() {
    return this.stack;
  }
}

// const stack = new Stack();

// Push elements onto the stack
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("stack", stack);
