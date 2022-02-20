class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
  let slow = head;
  let fast = head;
  while (true) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      let slow2 = head;
      while (slow2 !== slow) {
        slow = slow.next;
        slow2 = slow2.next;
      }
      return slow;
    }
  }
  return null;
}
// Brute forse
function findLoop2(head) {
  // Write your code here.
  const hash = {};
  while (true) {
    let val1 = head.value;
    if (val1 in hash) return head;
    hash[val1] = true;
    head = head.next;
  }
  return null;
}
