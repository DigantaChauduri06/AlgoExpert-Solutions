// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
      this.setHead(node);
      return;
    }

    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    // Single node and its equal
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
    let curr = 1;
    let temp = this.head;
    if (position == 1) {
      this.setHead(nodeToInsert);
      return;
    }
    while (temp !== null && curr++ !== position) {
      temp = temp.next;
    }
    if (!temp) {
      this.setTail(nodeToInsert);
    } else this.insertBefore(temp, nodeToInsert);
  }

  removeNodesWithValue(value) {
    // Write your code b here.
    let temp = this.head;
    while (temp !== null) {
      let nodeToBeDeleted = temp;
      temp = temp.next;
      if (nodeToBeDeleted.value === value) {
        this.remove(nodeToBeDeleted);
      }
    }
  }

  remove(node) {
    // Write your code here.
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBinding(node);
  }

  containsNodeWithValue(value) {
    // Write your code here.
    let temp = this.head;
    while (temp && temp.value !== value) {
      temp = temp.next;
    }
    return temp !== null;
  }
  /* My Helper function*/
  removeNodeBinding(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}
