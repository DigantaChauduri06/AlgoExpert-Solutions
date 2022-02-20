// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
/**
 * @param { @Linkedlist head1,head2}
 * @returns int
 */
function sumOfLinkedLists(h1, h2) {
  // Write your code here.
  let nn = new LinkedList(0);
  let dummy = nn;
  let carry = 0;
  while (h1 || h2 || carry) {
    const val1 = h1 ? h1.value : 0;
    const val2 = h2 ? h2.value : 0;
    const sum = val1 + val2 + carry;
    const rem = sum % 10;
    const after = new LinkedList(rem);
    nn.next = after;
    nn = nn.next;
    carry = Math.floor(sum / 10);
    h1 = h1 ? h1.next : null;
    h2 = h2 ? h2.next : null;
  }
  return dummy.next;
}
