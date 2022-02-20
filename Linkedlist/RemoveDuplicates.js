// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function removeDuplicatesFromLinkedList(head) {
  // Write your code here.
  if (!head || !head.next) return head;
  let temp = head;
  while (temp) {
    while (temp && temp.next && temp.next.value === temp.value) {
      temp.next = temp.next.next;
    }
    temp = temp.next;
  }
  return head;
}
function removeDuplicatesFromLinkedList(head) {
  // Write your code here.
  if (!head || !head.next) return head;
  let temp = head;
  while (temp) {
    let nextNode = temp.next;
    while (nextNode && nextNode.value === temp.value) {
      nextNode = nextNode.next;
    }
    temp.next = nextNode;
    temp = nextNode;
  }
  return temp;
}
