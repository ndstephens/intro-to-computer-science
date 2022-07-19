# Breadth First Traversal

Breadth-first is `not recursive` processing of subtrees like depth-first (though it can be done recursively).

In breadth-first, we want to process `one layer at a time`, starting at the top. In other words, we start at the root, and slowly make our way "down" the tree.

## WHEN IS IT USEFUL:

- This is really useful if you're looking for something you know is going to be `near the root` of the tree or if you're looking for the "closest" (e.g. least hops) node to something.
- For example, if your tree represents a `social network` and you're looking to `recommend who to follow`, you might do a breadth-first traversal of their social contacts and recommend them `people with 2 degrees of separation`.
- Breadth-first traversals are useful for many things and we'll be using the algorithm when we do `path-finding`.

## NOTES:

- The way we accomplish this is using a `queue`.
  - A queue is an array where the first thing you put in is the first thing you get out of it (FIFO, first in first out, as opposed a stack which is first in last out, FILO.)
  - Another way of thinking about it is that if you call dequeue on a queue, the item that has been in there the longest is the one that comes out.
- What we're going to do is process the node, then add the left child to the queue and then add the right child to the queue.
- After that, we'll just dequeue an item off of the queue and call our function recursively on that node.
- You keep going until there's no items left in the queue.

### TRICKS:

- It's pretty simple. Just view the course website [page](https://btholt.github.io/complete-intro-to-computer-science/breadth-first-tree-traversals) and the solution code.

### CLUES:

- You know that what you're looking for is near the top (the root).

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- `O(n)` ??

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- `O(n)` ??
