# Depth First Traversal

Trees are an essential part of storing data, or simply put they're data structures. Among their benefits is that they're optimized to be searchable. Occasionally you need to serialize the entire tree into a flat data structure (such as an array).

There are three variations of depth-first traversal:

- Pre-order
- In-order
- Post-order

## WHEN IS IT USEFUL:

- When you need to serialize the entire tree into a flat data structure (such as an array).

## NOTES:

- Pre-order:
  - process the node (save its value to an array), then recursively call the method on the left subtree and then the right subtree.
  - Best for making a deep-copy of a tree (such as deep copy of a JS object).
- In-order:
  - first recursively call the method on the left subtree, then process the node, and then call the method on the right subtree.
  - Best to save the values of an ordered tree in a sequential order.
- Post-order:
  - first recursively call the method on the left subtree, then the left subtree, then you process the node.
  - Best if you're deleting a tree since you'd process the left tree, then the right, and only after the children had been deleted would you delete the parent node you're working on.

### TRICKS:

- The functions are all written the exact same way.
- Only thing that changes is where in the function you push the node value to the array.

### CLUES:

- Provides 3 different options for how you save the data for 3 different purposes.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- `O(n)`

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- `O(1)`
