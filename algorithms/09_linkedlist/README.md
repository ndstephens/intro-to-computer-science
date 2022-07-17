# Linked List

LinkedList is made of a bunch of nodes that point to the next one in the list. Every node in a LinkedLists has two properties, the value of whatever is being store and a pointer to the next node in the list. These nodes will not be sequential in memory, meaning we don't get the easy lookups but the advantage is that adding things is easy since we don't have to do the compacting we had to do with ArrayList.

## WHEN IS IT USEFUL:

- Adding and deleting is easier than ArrayLists.
  - Adding and deleting require a lookup, but for Big-O consider them as separate actions.
- Lookups take longer b/c you only know the `head`, so you must start there and travel forward one by one.
- ArrayLists are generally more useful b/c their lookup speed is fast.

## NOTES:

- You'll create a `LinkedList` and a `Node` class.
  - `LinkedList` has the properties:
    - `Head` (points to a `Node`)
    - `Tail` (points to a `Node`)
    - `Length`
  - `Node` has the properties:
    - `Value`
    - `Next` (points to another `Node`)
- You will need to manually update these properties.
- Since `head` and `tail` reference Nodes you will need to manually update their `next` property, and possibly their `value` (depending on the requirements).

### TRICKS:

- Reuse methods within other methods if possible.
  - `pop` is a specific form of `delete`...so have `pop` use `delete`.
  - just like how `get` is specific and can use `find` within it.
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
