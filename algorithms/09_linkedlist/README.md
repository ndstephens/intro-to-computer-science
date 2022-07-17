# Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list. These nodes will not be sequential in memory, meaning we don't get the easy lookups but the advantage is that adding things is easy since we don't have to do the compacting we had to do with ArrayList.

## WHEN IS IT USEFUL:

- Adding and deleting is easier than ArrayLists.
  - Adding and deleting require a lookup, but for Big-O consider them as separate actions.
- Lookups take longer b/c you only know the `head`, so you must start there and travel forward one by one.
- ArrayLists are generally more useful b/c their lookup speed is fast.

## NOTES:

- Don't forget to keep track of the `length`. You update it manually.
- Also need to manually keep track of the `head` and `tail`.

### TRICKS:

- Reuse methods, such as `pop`, within other methods if possible.
- Create a `find` method since insertions and deletions both require a lookup.
  - Can maybe create a `collapse` method as well.
- When creating a method often you should:
  - check the length first
  - control for if it's the tail or the head
  - then control for everything else

### CLUES:

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Lookups - `O(n)`
- Inserts and Deletions - `O(1)`

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- ???
