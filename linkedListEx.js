class Node {
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  //actions with linked list----------------------------------
  append(value) {
    const newCurrentNode = new Node(value);
    newCurrentNode.nextNode = null;

    if (this.head === null) {
      this.head = newCurrentNode;
      return;
    }

    let loopCurrentNode = this.head;

    while (loopCurrentNode.nextNode !== null) {
      loopCurrentNode = loopCurrentNode.nextNode;
    }
    loopCurrentNode.nextNode = newCurrentNode;
  }

  toString() {
    let message = "";

    if (this.head === null) {
      console.log("null");
      return;
    }
    let loopCurrentNode = this.head;

    while (loopCurrentNode.nextNode !== null) {
      message += `  ( ${loopCurrentNode.value} )  ->`;
      loopCurrentNode = loopCurrentNode.nextNode;
    }
    console.log(message, `( ${loopCurrentNode.value} ) -> null `);
  }

  prepend(value) {
    const newCurrentNode = new Node(value);

    if (this.head === null) {
      newCurrentNode.nextNode = null;
      this.head = newCurrentNode;
      return;
    }

    newCurrentNode.nextNode = this.head;
    this.head = newCurrentNode;
  }

  size() {
    let size = 0;
    if (this.head === null) {
      return 0;
    }

    let loopCurrentNode = this.head;

    while (loopCurrentNode.nextNode !== null) {
      size += 1;
      loopCurrentNode = loopCurrentNode.nextNode;
    }
    return size + 1;
  }

  headNode() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  tailNode() {
    if (this.head === null) {
      return null;
    }

    let loopCurrentNode = this.head;

    while (loopCurrentNode.nextNode !== null) {
      loopCurrentNode = loopCurrentNode.nextNode;
    }

    return loopCurrentNode.value;
  }

  at(index) {
    if (this.head === null) {
      return null;
    }
    let count = 0;
    let loopCurrentNode = this.head;

    while (loopCurrentNode !== null) {
      if (count === index) {
        return loopCurrentNode;
      }
      loopCurrentNode = loopCurrentNode.nextNode;
      count += 1;
    }
    return null;
  }

  contains(valueInput) {
    if (this.head === null) {
      return false;
    }

    let loopCurrentNode = this.head;

    while (loopCurrentNode !== null) {
      if (loopCurrentNode.value === valueInput) {
        return true;
      }
      loopCurrentNode = loopCurrentNode.nextNode;
    }
    return false;
  }

  find(valueInput) {
    if (this.head === null) {
      return null;
    }
    let count = 0;
    let loopCurrentNode = this.head;

    while (loopCurrentNode !== null) {
      if (loopCurrentNode.value === valueInput) {
        return count;
      }
      loopCurrentNode = loopCurrentNode.nextNode;
      count += 1;
    }
    return null;
  }

  insertAt(valueInput, index) {
    const newCurrentNode = new Node(valueInput);
    newCurrentNode.nextNode = null;

    if (index === this.size()) {
      this.append(valueInput);
      return;
    }
    if (this.head === null || index < 0) {
      return null;
    }
    if (index === 0) {
      newCurrentNode.nextNode = this.head;
      this.head = newCurrentNode;
      return;
    }
    let count = 0;
    let loopCurrentNode = this.head;
    let beforeCurrent;

    while (loopCurrentNode !== null) {
      if (count === index) {
        newCurrentNode.nextNode = loopCurrentNode;
        beforeCurrent.nextNode = newCurrentNode;
        return;
      }

      beforeCurrent = loopCurrentNode;
      loopCurrentNode = loopCurrentNode.nextNode;
      count += 1;
    }
    return null;
  }
  pop() {
    if (this.head === null) {
      return;
    }
    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let loopCurrentNode = this.head;
    let beforeCurrent;

    while (loopCurrentNode.nextNode !== null) {
      beforeCurrent = loopCurrentNode;
      loopCurrentNode = loopCurrentNode.nextNode;
      if (loopCurrentNode.nextNode === null) {
        beforeCurrent.nextNode = null;
        return;
      }
    }
  }

  removeAt(index) {
    if (this.head === null || index < 0) {
      return null;
    }
    if (index === 0 && this.size() > 0) {
      this.head = this.head.nextNode;
      return;
    }
    let count = 0;
    let loopCurrentNode = this.head;
    let beforeCurrent;

    while (loopCurrentNode !== null) {
      if (count === index) {
        beforeCurrent.nextNode = loopCurrentNode.nextNode;
        return;
      }

      beforeCurrent = loopCurrentNode;
      loopCurrentNode = loopCurrentNode.nextNode;
      count += 1;
    }
    return null;
  }
}

//Testing
const link = new LinkedList();
link.prepend("first");
link.append("node1");
link.append("node2");
link.append("node3");
link.append("node4");
link.append("node5");
link.append("tail");

link.pop();

console.log(link.size());
console.log(link.headNode());
console.log(link.tailNode());
console.log(link.at(1));
console.log(link.contains("tail"));
console.log(link.find("node1"));

link.insertAt("nah", 6);

link.toString();
link.removeAt(0);
link.toString();
