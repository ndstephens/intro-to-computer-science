/*

Binary Search Tree!

Name your class Tree.

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

// MY THOUGHT PROCESS
/*
start at root
  CHECK LEFT (value <= node.value)
    CHECK IF node.left EXISTS
      TRUE - start checking again (recursion?)
      FALSE - create new node and set node.left to it
  ELSE GO RIGHT (node.right)
    CHECK IF node.right EXISTS
      TRUE - start checking again (recursion?)
      FALSE - create new node and set node.right to it
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// RECURSION - but this could blow-up the call stack
// class Tree {
//   constructor() {
//     this.root = null;
//   }
//   add(value) {
//     if (!this.root) {
//       this.root = new Node(value);
//     } else {
//       this._traverse(value, this.root);
//     }
//     return this;
//   }
//   _traverse(value, parent) {
//     if (value <= parent.value) {
//       // go left...
//       if (!parent.left) {
//         parent.left = new Node(value);
//       } else {
//         this._traverse(value, parent.left);
//       }
//     } else if (!parent.right) {
//       parent.right = new Node(value);
//     } else {
//       this._traverse(value, parent.right);
//     }
//   }
//   toObject() {
//     return this.root;
//   }
// }

// ITERATIVE
class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      let parent = this.root;
      while (true) {
        if (value <= parent.value) {
          // go left...
          if (!parent.left) {
            parent.left = new Node(value);
            break;
          } else {
            parent = parent.left;
          }
        } else {
          // go right...
          if (!parent.right) {
            parent.right = new Node(value);
            break;
          } else {
            parent = parent.right;
          }
        }
      }
    }
    return this;
  }
  toObject() {
    return this.root;
  }
}

// unit tests
// do not modify the below code
describe.skip('Binary Search Tree', function () {
  it('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();
    // render(objs, nums);

    expect(objs.value).toEqual(3);

    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();

    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();

    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();

    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();

    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});
