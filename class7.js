class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* IMPLEMENT LINK LIST  */

// First head --- last tell

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append() {
    const newNode = new Node(value);
    // if this linkList Empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the  linkList is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend() {}

  insert() {}

  remove() {}

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

LinkList.append(1);
LinkList.append(2);
LinkList.append(2);

LinkList.print();
