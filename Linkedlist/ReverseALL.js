class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * @param {LinkedList}
 * @return {LinkedList}
 *
 */
function reverseLinkedList(head) {
  // Write your code here.
  if (!head || !head.next) return head;
  let prev = null;
  let after = head.next;
  let curr = head;
  while (curr) {
    after = curr.next;
    curr.next = prev;
    prev = curr;
    curr = after;
  }
  return prev;
}
