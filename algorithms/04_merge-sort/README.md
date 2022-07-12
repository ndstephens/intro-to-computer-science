# Merge Sort

Break an array down into lists of 1 and then sort them as you build it back up.

- IT'S RECURSIVE
- Continue to break a large list down into 2 smaller lists until eventually you end up with lists of length 1.
- A list of length 1 is already sorted.
- Take two smaller **_sorted_** lists and combine them back into one larger sorted list.
- Continue doing that until you've merged them all back together into one complete sorted list.

## WHEN IS IT USEFUL:

- When you're not sure how unsorted your list will be. The Big-O is the same whether the list is already sorted, reverse-sorted, or anything in between.
- It's stable and its average case scenario is really good.
  - It's the primary `sort` method used by most/all browser JS engines.
- Time Complexity is `log-n`, but Space Complexity can get high. So if storage restraints are a concern it may not be the best approach.
- If you know your list will already be mostly sorted then go with Insertion Sort instead.

## NOTES:

- You need two functions.
  - The first function will break down the larger lists into two smaller lists (the recursive function). Continue until they're all lists of length 1 (which is technically "sorted").
  - The other is a function that takes two smaller **_sorted_** lists and combines them back into one larger **_sorted_** list. Continue to do that with the larger lists until you've merged them all back into one sorted list
  - The first function is recursive and the second is not.
- A list finally being broken down to a length of 1 is the `base case`.
  - From there you start to build back up using the non-recursive merging/sorting function.

### TRICKS:

- By breaking down a list into many separate lists, each of length 1, is kind-of the trick.
  - B/c they're of length 1 they're technically sorted.
- Combining 2 lists that are each already sorted provides a short-cut.
  - You usually don't have to compare everything in one list to everything in the other.
  - So, as the initial unsorted array grows larger and larger, you get to take more and more shortcuts.
- For greater efficiency the merge function could NOT mutate the arrays and instead have two counters that keep track of the index in each array as you grab values from them. It'd be a bit faster and maybe use less disk space.
- `merge` being a separate function is also good b/c it's all then easier to test.
  - Always try to keep functions simple. They should do one thing.

### CLUES:

- If you need to break something down to its elements then recursion can be a good solution.
- If you need to work with sorted arrays, remember that an array of length 1 is by default sorted.
- Merging/sorting two already sorted arrays is much faster than merging/sorting two unsorted arrays.
  - That's why the point of this algorithm is to work with sorted arrays. You can be sure they all begin as sorted if they all begin at a length of 1.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Best, Worst, and Average case scenarios are all the same.
- Every item in the array will be looked at least once. So that means that we're going to be at least `O(n)`.
- Then we need to compare those items to other items in the array...but usually not **_every_** other item.
  - That's b/c we merge already sorted arrays.
  - So, as our array grows larger and larger, we get to take more and more shortcuts.
  - This the hallmark of a `log n` sort of behavior: the larger the list gets, we get diminishing amounts of more things to do.
- `O(n log n)`

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- Recursions can hog up resources (memory) pretty quickly.
- Depending on how Merge Sort is written you may be creating and throwing away many temporary arrays.
- `O(n)`

### DESTRUCTIVE:

- Yes/No - depends

### STABILITY:

- It can, depends on how it's written.
