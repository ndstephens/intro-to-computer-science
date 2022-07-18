/*
  AVL Tree

  Name you class/function (anything we can call new on) Tree

  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.

  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.

  If you have any questions conceptually about balancing the tree, refer to the class website.

  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value
*/

class Tree {
  constructor() {
    this.root = null;
  }
  add(value) {
    if (!this.root) {
      this.root = new Node(value);
    } else {
      this.root.add(value);
    }
    return this;
  }
  toObject() {
    return this.root;
  }
}

/*
Get the left height and the right height
  Whichever is bigger is a node's "height"
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
  // the "add" method is recursive
  add(value) {
    if (value <= this.value) {
      // go left
      if (!this.left) {
        this.left = new Node(value);
      } else {
        this.left.add(value);
      }
    } else {
      // go right
      if (!this.right) {
        this.right = new Node(value);
      } else {
        this.right.add(value);
      }
    }
    // have to update the height calculation after every addition of a new node
    this._updateHeight();
    // also need to check the balance
    this.balance();
  }
  _updateHeight() {
    const leftHeight = this.left?.height || 0;
    const rightHeight = this.right?.height || 0;
    if (!leftHeight && !rightHeight) {
      this.height = 1;
    } else if (leftHeight > rightHeight) {
      this.height = this.left.height + 1;
    } else if (rightHeight > leftHeight) {
      this.height = this.right.height + 1;
    }
  }
  // the following I mostly copied from the solution, except for the usage of the _updateHeight function
  // the "balance" method I already mostly figured out on my own
  // but the rotateRR and LL are basically just copying instructions...very difficult to figure out on your own
  balance() {
    const leftHeight = this.left?.height || 0;
    const rightHeight = this.right?.height || 0;

    // If balanced do nothing, otherwise...
    // Do you need a single or double rotation?
    //   Need to check balance of heavy-side child node
    //     It should be balanced or heavy on the same side
    //   If double, first rotate the child then rotate self
    // You always rotate the heavy side
    //   ie. RIGHT-HEAVY => RIGHT-ROTATION

    if (leftHeight > rightHeight + 1) {
      // SELF is LEFT-HEAVY so do a LEFT-ROTATION
      // ...first check balance of LEFT-CHILD (this.left) (the heavy side)
      const leftLeftHeight = this.left.left?.height || 0;
      const leftRightHeight = this.left.right?.height || 0;
      // LEFT-CHILD should be balanced or LEFT-HEAVY, otherwise...
      if (leftRightHeight > leftLeftHeight) {
        // it's RIGHT-HEAVY so do a RIGHT-ROTATION of "this.left"
        // double-rotation
        this.left.rotateRR();
      }
      // LEFT-ROTATION of SELF
      this.rotateLL();
    } else if (rightHeight > leftHeight + 1) {
      // SELF is RIGHT-HEAVY so do a RIGHT-ROTATION
      // ...first check balance of RIGHT-CHILD (this.right) (the heavy side)
      const rightLeftHeight = this.right.left?.height || 0;
      const rightRightHeight = this.right.right?.height || 0;
      // RIGHT-CHILD should be balanced or RIGHT-HEAVY, otherwise...
      if (rightLeftHeight > rightRightHeight) {
        // it's LEFT-HEAVY so do a LEFT-ROTATION of "this.right"
        // double-rotation
        this.right.rotateLL();
      }
      // RIGHT-ROTATION of SELF
      this.rotateRR();
    }
  }
  rotateRR() {
    const valueBefore = this.value;
    const leftBefore = this.left;
    this.value = this.right.value;
    this.left = this.right;
    this.right = this.right.right;
    this.left.right = this.left.left;
    this.left.left = leftBefore;
    this.left.value = valueBefore;
    // update height of LEFT-CHILD and SELF
    // this.left was this.right before the rotation (the one that got rotated)
    // must start with the child-height to get the correct self-height
    this.left._updateHeight();
    this._updateHeight();
  }
  rotateLL() {
    const valueBefore = this.value;
    const rightBefore = this.right;
    this.value = this.left.value;
    this.right = this.left;
    this.left = this.left.left;
    this.right.left = this.right.right;
    this.right.right = rightBefore;
    this.right.value = valueBefore;
    // update height of RIGHT-CHILD and SELF
    // this.right was this.left before the rotation (the one that got rotated)
    // must start with the child-height to get the correct self-height
    this.right._updateHeight();
    this._updateHeight();
  }
}

// unit tests
// do not modify the below code
describe.skip('AVL Tree', function () {
  test('creates a correct tree', () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});
