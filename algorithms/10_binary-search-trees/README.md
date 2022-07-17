# Binary Search Trees

Trees are another way to structure data. They work differently than arrays, which can have arbitrary data in arbitrary order. Many trees are ordered by value, so whenever you insert a new value, it will be inserted in a sorted fashion.

There are many varieties of tree data structures. They're used everywhere due to their fast access patterns, even across enormous data sets.

At its core, a tree is very similar to a LinkedList. You have nodes. Those nodes have values and pointers to other nodes. Unlike a LinkedList which only has one next pointer (or maybe a next and previous) trees can have many pointers. BST's have just two child nodes.

BST's are not used in production. They can be very unbalanced which could cause lookups, on average, to not even be `O(log n)`. There are better trees to use.

## WHEN IS IT USEFUL:

- They're very searchable. You're doing a bunch of work up front to make them easy to search later.
- One really good example that very frequently uses some variety of a tree is a database index.
  - We'll store the whole database in one data structure and then we'll keep a separate tree that we can use as an index.

## NOTES:

- Has to be ordered by value (like many other trees).
- Consists of `nodes` and those `nodes` have `values` and `children` (pointers to other nodes).
  - In the case of BST's each `node` has 0-2 `child nodes` - the `binary` part.
- They are well suited for `searching` - `O(log n)`
  - Slower inserts and deletes.
- The first `node` is called the `root`.
- We can think of each `node`'s child as being on the `left` or the `right`.
  - All `child` and other `descendant` nodes to the `left` of any given `parent node` have values `less than` the `parent node`.
  - All `child` and other `descendant` nodes to the `right` of any given `parent node` have values `greater than` the `parent node`
  - Values that are `equal to` can go on either side, **_just be consistent_**

### TRICKS:

- You'll create a `Tree` and a `Node` class.
  - `Tree` has the properties:
    - `Root` (points to the first `Node` created in the structure)
  - `Node` has the properties:
    - `Value`
    - `Left` (points to a child `Node` that has a value less than or equal to its parent)
    - `Right` (points to a child `Node` that has a value greater than its parent)

### CLUES:

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Lookups - `O(log n)`
  - Worst case (an ordered array turned into a tree) - `O(n)`
- Inserts and Deletions - ???

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- ???
