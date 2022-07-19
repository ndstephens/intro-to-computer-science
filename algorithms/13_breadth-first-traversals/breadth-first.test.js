// I like his solution a bit better...it's cleaner and more clear
const breadthFirstTraverse = (queue, array) => {
  while (queue.length) {
    array.push(queue[0].value);
    if (queue[0].left) {
      queue.push(queue[0].left);
    }
    if (queue[0].right) {
      queue.push(queue[0].right);
    }
    queue.shift();
  }
  return array;
};

// unit tests
// do not modify the below code
describe.skip('breadth-first tree traversal', function () {
  const answer = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

  const tree = {
    value: 'A',
    left: {
      value: 'B',
      left: {
        value: 'D',
        left: {
          value: 'G',
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 'E',
        left: null,
        right: {
          value: 'H',
          left: {
            value: 'K',
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 'C',
      left: {
        value: 'F',
        left: {
          value: 'I',
          left: null,
          right: null,
        },
        right: {
          value: 'J',
          left: null,
          right: null,
        },
      },
      right: null,
    },
  };

  test('breadthFirstTraverse', () => {
    expect(breadthFirstTraverse([tree], [])).toEqual(answer);
  });
});
