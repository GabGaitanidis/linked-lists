class LinkedList {
  constructor() {
    this.next = null;
  }
  prepend(value) {
    this.next = new Node(value, this.next);
  }

  append(value) {
    if (this.next == null) {
      this.prepend(value, this.next);
    } else {
      let tmp = this;
      while (tmp.next != null) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value);
    }
  }
  size() {
    let tmp = this;
    let size = 0;
    while (tmp.next != null) {
      tmp = tmp.next;
      size++;
    }
    console.log(size);
  }
  head() {
    console.log(this.next);
  }
  tail() {
    let tmp = this;
    let arr = [];
    while (tmp.next != null) {
      tmp = tmp.next;
      arr.push(tmp);
    }
    console.log(arr[arr.length - 1]);
  }
  at(index) {
    let tmp = this;
    let arr = [];
    while (tmp.next != null) {
      tmp = tmp.next;
      arr.push(tmp);
    }
    console.log(arr[index]);
  }

  pop() {
    if (this.next.next == null) {
      this.next = null;
    } else {
      let tmp = this;
      let arr = [];

      while (tmp.next != null) {
        tmp = tmp.next;
        arr.push(tmp);
      }

      arr[arr.length - 2].next = null;
      console.log(this);
    }
  }

  contains(value) {
    let tmp = this;
    let arr = [];
    while (tmp.next != null) {
      tmp = tmp.next;
      arr.push(tmp.value);
    }

    arr.forEach((item) => {
      if (item == value) {
        console.log(true);
      }
    });
  }
  find(value) {
    let tmp = this;
    let arr = [];
    while (tmp.next != null) {
      tmp = tmp.next;
      arr.push(tmp.value);
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        console.log(i);
      }
    }
  }
  toString() {
    let tmp = this;
    let stringed = ``;
    while (tmp.next != null) {
      tmp = tmp.next;

      stringed += `(${tmp.value}) -> `;
      if (tmp.next == null) {
        stringed += `null`;
      }
    }
    console.log(stringed);
  }
}
class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.next = nextNode;
  }
}
const list = new LinkedList();

list.append(401);
list.prepend(1);

list.pop(1);
