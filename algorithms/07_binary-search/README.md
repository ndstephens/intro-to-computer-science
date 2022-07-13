# Binary Search

There are essentially two common ways of doing search: `linear search` and `binary search`. Linear search is the simplest and is really only useful if the list you're searching is not sorted in any way. You just go through from 0 to the length of the array and ask "is the is the element I'm looking for?" No frills here. Its complexity is `O(n)`.

`Binary search` is a bit more interesting.

- `It only works if the array is already sorted`.
- To explain it, let's take the example of how you find a name in a telephone book.
  - A telephone book is a sorted list of names.
  - You'll open the book more or less to the middle.
  - If the name you're looking for is earlier in the alphabet, you'll go halfway to the earlier side of the book and keep going halfway until eventually you land on the name you're looking for.

## WHEN IS IT USEFUL:

- **_Only useful (only works) if the array is already sorted._**

## NOTES:

- You could do it recursively, but iteratively is usually more efficient.

### TRICKS:

- Makes sense to use a while loop since you don't know how long it'll take and need to keep searching until you find and return the item.
  - Or until the conditional is busted in which case the item doesn't exist in the array.
- You're basically just keeping track of your `min` and `max` index range (the range of indexes you're searching between).
  - The index you actually search is roughly in the `middle` of those two.
  - You find that middle by `adding together min and max and dividing by 2`.
  - On every loop you're tightening the range by `resetting` either the `min` or the `max` to the index you just searched (plus 1 or minus 1 respectively).
- My first attempt was similar to this approach, but overly complicated...and the conditional would never break if the item was never found.

### CLUES:

- If the array is `sorted` then this is almost always a faster searching algorithm than just linearly going through the array to find what you're looking for.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- `O(log n)`

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- `O(1)`

### DESTRUCTIVE:

- No

### STABLE:

- Yes
