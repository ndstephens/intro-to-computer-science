# Insertion Sort

With insertion sort, you treat the first part of your list as `sorted` (before the current index) and the second part of your list as `unsorted`.

- You start with the second element in the list (`index 1`) and loop backwards (towards `index 0`) over the sorted list, asking "is this element smaller than the one to the left?" If yes, you swap those values. If you land at the first element of the sorted part of the list, you're done with that sweep. You then repeat this until you've done it over the whole list!

## WHEN IS IT USEFUL:

If the arrays you're going to be sorting are likely to be sorted already or very close to it. In this case it will likely be faster than Quick Sort and Merge Sort.

## NOTES:

- You start at `index 1` since you're always comparing the current index with the one before it (to the left).
- You only sort everything before (and including) the current index. Everything after is still considered unsorted.
- Basically you're taking the element at the current index and moving it towards the left or start of the array (the "sorted" part) until it's in its sorted position. Then move onto the next element. The elements in the sorted part of the array are currently sorted amongst each other, but not yet necessarily at their final index position until the entire array has been swept through.

### TRICKS:

- The outer loop should be a `for loop` since you need to go over the entire array at least once.
- When sweeping through the sorted part, you can stop once a swap check returns false. The sorted part is finished (it's as sorted as it can be) for that particular sweep.
- While sweeping over the sorted part stop when you get to index 1 (if you get that far). That's as far as you can go (b/c you're comparing index 1 and 0 at that point).
- The included solution is pretty clever:
  - The `for loop` check condition is basically working the same as the `while loop` condition I made, and equally allows you to break out of that current cycle.
  - The `for loop` already includes a counter instead of having to make one with the `while loop`.
  - He puts the `insertion-value` we're looking to insert/sort into a variable. He then only needs to moves the `[index - 1]` value to the `[index]` location instead of swapping both (b/c it's ok that the `[index]` value gets overwritten). Once the proper sort location is found it is overwritten with the `insertion-value`.

### CLUES:

- Similar to Bubble Sort
- If you need a counter then see if using a `for loop` will work (over a `while loop`) since the counter is already baked in.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

#### \- BEST CASE:

- It's already sorted.
- **O(n) - LINEAR**

#### \- WORST CASE:

- It's a backward sorted array.
- **O(n<sup>2</sup>) - QUADRATIC (EXPONENTIAL)**

#### \- AVERAGE CASE:

- Some numbers are in order, some are not.
- **O(n<sup>2</sup>) - QUADRATIC (EXPONENTIAL)**

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- We're operating on the array itself and not creating any new arrays in memory.
- **O(1) - CONSTANT**

### DESTRUCTIVE:

- **YES** - we're operating on the array itself.

### STABILITY:

- **YES** - well, it should be, depending on how you program it.
