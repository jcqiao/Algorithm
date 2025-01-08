function reverseLinkedList(head) {
  if (head === null) {
    return;
  }
  const stack = [];
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  let newHead = stack.pop();
  current = newHead;
  while (stack.length > 0) {
    current.next = stack.pop();
    current = current.next;
  }
  current.next = null;
  return newHead;
}
