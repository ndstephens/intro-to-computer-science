# Array List

(Let's pretend for a moment that JavaScript has no array type. No more `const x = []`. We only have one thing: objects. So we'd need to implement the array numbering ourselves. But not just that, we'd have to implement adding numbers, removing numbers, getting numbers, etc.)

- For `ArrayList`, this works more or less how we as humans tend think about it: we'll lay out everything sequentially in memory.
  - We'd say that the array starts somewhere and then if we ask for the 2 index, we'd go to the beginning of the array and move over 3 to the 2 index.
  - Since everything is already laid out in order in memory, it makes look-ups really simple.
    - This would be a `O(1)` in terms of complexity. No matter how big the ArrayList is, array `lookups` take the same amount of time.
  - Now imagine our list is 15,000 items long and we `delete` the 1 index.
    - We now have to shift 14,998 items over in memory. This is called collapsing (or compacting) and it's painful for ArrayList.
    - Same applies for inserts.
    - Keep in mind you have to do a look-up in order to do a deletion. We're measuring these actions independently in regards to Big-O.

## WHEN IS IT USEFUL:

- `Look-ups` or get()
- You're essentially prematurely optimizing for lookups.
- Deletions and inserts are slow.

## NOTES:

- You'll create an `ArrayList` class. It has the properties:
  - `Data` (an object that represents the "array")
  - `Length`
- You will need to manually update these properties.

### TRICKS:

- Put all the data onto a `data` property, not directly on the class itself.
- Reuse methods within other methods if possible.
  - use `delete` with `pop`, since `pop` is just a specific usage of `delete`.
  - `delete` can use `get` since `get` also includes some error checking.
  - `delete` can also use the `_collapse` method.

### CLUES:

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Lookups - `O(1)`
- Inserts and Deletions - `O(n)`

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- ???
