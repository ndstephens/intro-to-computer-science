# AVL Trees - Balanced BST's

AVLs are specialized BSTs. That is to say a valid AVL tree is always a valid BST (but not necessarily vice versa.) AVL trees are a subset of BST trees. When you add a new value to a AVL tree, you do it the same way. The only difference is on the way up your recursive calls you check to see if the node is balanced after you added the new node. A tree is out of balance if its subtrees' difference of heights is greater than one.

So what's the benefit of all this extra effort? We can now guarantee that we won't hit those bad or worst case scenarios of having greatly out-of-balance trees and guarantee we won't hit the O(n) cases. Our worst case becomes O(log n).

A balanced binary tree (an AVL or other version) is exceptionally fast at finding something in a large dataset.

## WHEN IS IT USEFUL:

- They're very searchable. You're doing a bunch of work up front to make them easy to search later.
- One really good example that very frequently uses some variety of a tree is a database index.
  - We'll store the whole database in one data structure and then we'll keep a separate tree that we can use as an index.

## NOTES:

- Pretty much the same as a BST other than:
  - Each node also has a height property.
  - Each node's left and right side remain balanced...which keeps the overall tree balanced
- You `balance` by performing a `rotation` on a node (and its children) if one side becomes heavier than the other.
  - This sometimes requires a `double-rotation`, depending on if a child node is also out of balance.

### TRICKS:

- Similar to a BST except:
  - the `add` method now exists on the `Node` class and is recursive.
    - it must be recursive to perform the balancing on the way back up (and recalculate heights after a re-balance)
  - you keep track of node `height` in order to trigger re-balancing
- The rotation methods must basically be memorized. It would take way too much time to reason them out.
- You rotate in the same direction as the heavy side
  - Right-side-heavy => Right-rotation
- If a node being rotated is also considered heavy then a double-rotation is needed
- See the course notes and notes I put in the code for further explanation
  - This whole process requires certain aspects to just be memorized if you were to be tested on it.

### CLUES:

- A very good option if you need fast searches on a large dataset.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Lookups - `O(log n)` always
- Inserts and Deletions - ???

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- ???
