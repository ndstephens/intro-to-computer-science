const preorderTraverse = (node, array) => {
  array.push(node.value);
  if (node.left) {
    preorderTraverse(node.left, array);
  }
  if (node.right) {
    preorderTraverse(node.right, array);
  }
  return array;
};

const inorderTraverse = (node, array) => {
  // try going down the left
  if (node.left) {
    inorderTraverse(node.left, array);
  }
  // If no left-child then you reached a leaf-node, so add its value.
  //   - a leaf-node will have no children.
  //   - if a node has only one child, it'll always be on the left.
  //   - so if it has no left-child it definitely has no right-child.
  // If you did travel left but hit a leaf-node then you have now exited from the previous function call of "inorderTraverse" and are back here at the  parent, so add its value.
  array.push(node.value);
  // now try going to the right
  if (node.right) {
    inorderTraverse(node.right, array);
  }
  // If no right-child then you'll travel back up the tree until you find a parent who's right-child you have not traveled to yet.
  //   - otherwise you're done
  // It's ok to keep returning the array as you travel through the tree.  Only the final result will be returned from the original function call.  The rest are pointless but that's ok.
  return array;
};

const postorderTraverse = (node, array) => {
  if (node.left) {
    postorderTraverse(node.left, array);
  }
  if (node.right) {
    postorderTraverse(node.right, array);
  }
  array.push(node.value);
  return array;
};

// unit tests
// do not modify the below code
describe.skip('depth-first traversals', function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    },
  };

  it('preorderTraverse', () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11,
    ]);
  });

  it('inorderTraverse', () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  it('postorderTraverse', () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8,
    ]);
  });
});
