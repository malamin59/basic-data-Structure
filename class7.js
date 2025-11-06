class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    //if the link list it empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the link list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    //if the link list it empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the link list is noe empty
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // implement Insert
  // what & why i use this & implement

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("index out of bound: muri khal");
      return undefined;
    }
    // if the insert if in start of link list

    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    let count = 0;
    let leadingNode = this.head;

    while (count !== index - 1) {
      leadingNode = leadingNode.next;
      count++;
    }
    console.log(leadingNode)
  }

  remove() {}

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" --> "), " --- null");
  }
}

const linklist = new Linklist();

linklist.append(1);
linklist.append(2);
linklist.append(3);

linklist.prepend(10);//2
linklist.prepend(20);//1
linklist.prepend(30);//0

linklist.insert(2, 100)

linklist.print();
