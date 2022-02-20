// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * @void return
 * @LinkedList head
 * @int k
 */
function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  if (k === 0) return head;
  k--;
  let slow = head;
  let fast = head;
  let temp = head.next;
  for (let i = 0; i <= k; i++) {
    fast = fast.next;
  }
  if (!fast) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
    // delete temp;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  if (slow) {
    slow.next = slow.next.next;
  }
  return head;
}
