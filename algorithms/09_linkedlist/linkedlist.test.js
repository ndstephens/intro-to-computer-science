/*
  LinkedList

  Name your class / constructor (something you can call new on) LinkedList

  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.

  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses,
                      and returns removed value

  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.

  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    // if no head, this is the head
    if (!this.head) {
      this.head = node;
    } else {
      // if there's a head then there's a tail...
      // have current tail point to this new node
      this.tail.next = node;
    }
    // make this new node the tail
    this.tail = node;
    // increase the length
    this.length++;
  }
  pop() {
    // if no length then nothing to pop
    if (!this.length) return undefined;
    // if length is 1 then pop will erase the entire list
    if (this.length === 1) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return value;
    }
    // Otherwise...
    // grab the last node (the tail)
    const oldTail = this.tail;
    // find the node immediately before the current tail
    const newTail = this._find(this.length - 2);
    // set the tail to the new tail node
    this.tail = newTail;
    // set its "next" value to "null" (since it's the tail)
    this.tail.next = null;
    // drop length by 1
    this.length--;
    // return the value of the removed node
    return oldTail.value;
  }
  _find(index) {
    // exit early
    if (index >= this.length) return undefined;
    // if index = 0 then the loop won't run and the head will be returned
    let node = this.head;
    for (let i = 1; i <= index; i++) {
      node = node.next;
    }
    return node;
  }
  get(index) {
    const node = this._find(index);
    if (!node) return undefined;
    return node.value;
  }
  delete(index) {
    // exit early
    if (index >= this.length) return undefined;
    // if it's the tail
    if (index === this.length - 1) {
      this.pop();
      return;
    }
    // if it's the head
    if (index === 0) {
      // i think this case is already covered when checking the tail above...
      if (this.length === 1) {
        this.pop();
      }
      // grab current head
      const head = this.head;
      // make the head reference the next node in the list
      this.head = head.next;
      // shorten the length by 1
      this.length--;
      return head.value;
    }
    // Everything else...
    // find node before the one you want to delete
    const priorNode = this._find(index - 1);
    // grab the node to delete
    const nodeToDelete = priorNode.next;
    // collapse the list
    priorNode.next = nodeToDelete.next;
    // shorten the length by 1
    this.length--;
    // return deleted node's value
    return nodeToDelete.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// unit tests
// do not modify the below code
describe('LinkedList', function () {
  const range = (length) =>
    Array.apply(null, { length: length }).map(Number.call, Number);
  const abcRange = (length) =>
    range(length).map((num) => String.fromCharCode(97 + num));
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test('constructor', () => {
    expect(list).toEqual(expect.any(LinkedList));
  });

  test('push', () => {
    abcRange(26).map((character) => list.push(character));
    expect(list.length).toEqual(26);
  });

  test('pop', () => {
    abcRange(13).map((character) => list.push(character));
    expect(list.length).toEqual(13);
    range(10).map(() => list.pop());
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });

  test('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map((character) => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length - 1)).toEqual('y');
  });

  test('delete', () => {
    abcRange(26).map((character) => list.push(character));
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
});
