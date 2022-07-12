# Quick Sort

It's another divide-and-conquer, recursive algorithm but it takes a slightly different approach.

- The basic gist is that you take the last element in the list and call that the `pivot`.
- Everything that's smaller than the `pivot` gets put into a `"left" list` and everything that's greater get's put in a `"right" list`.
- You then call quick sort on the left and right lists independently (hence the recursion.)
- After those two sorts come back, you `concatenate` the sorted left list, the `pivot`, and then the right list (in that order.)
- The `base case` is when you have a list of length 1 or 0, where you just return the list given to you.

## WHEN IS IT USEFUL:

- Most/all browser JS engines use "Merge Sort" with JS calls `sort` on an array, but will also use `Quick Sort` sometimes (at least it used to be that way).
  - Quick has better spacial efficiency (at least when implemented as a destructive sort).
- What's the best case scenario? It's actually the same the average case scenario: a randomly sorted list.
- What is the worst case for quick sort? A sorted list. The pivot would always be the largest number in the array, meaning the left array would always be full and the right array would always be empty. In order for us to get that log n magic instead of just n, we need to be able to skip some comparisons. If it's sorted, we will compare every number against every other so we'd end up with O(n²).
  - Same would apply with a reverse-sorted list.

## NOTES:

- A list being broken down to a length of 1 is the `base case`.
- B/c there's a `pivot` it's best to think in terms of a `left` and `right` list.
  - You will have more than one `pivot` since, due to recursion, each list on either side of the pivot will get it's own pivot and broken down further...until you have lists of length 1.
  - You then build it back up by combining the left list, pivot, and right list and return that new list from each depth (or level) of the recursion.

### TRICKS:

- By breaking down a list into many separate lists, each of length 1, is kind-of the trick.
  - B/c they're of length 1 they're technically sorted.
- Combining 2 lists that are each already sorted provides a short-cut.
- For greater spatial efficiency it is possible to implement quick sort as a destructive sort that operates in-place and uses some other tricks like tail call optimization. In this case its spatial complexity will be O(log n) as it will still make some memory allocations on the call stack, but far fewer than merge sort does.
- `Quicksort3`: where you take the first element, the middle element, and the last element and use the middle value as the pivot, guaranteeing that your pivot isn't the smallest or biggest element.
  - It does add a few more comparisons to your sort so it does add overhead but at the benefit of basically removing the worst case scenario.
  - Others will just choose a random pivot each time.
  - **_Most of the variations revolve around pivots._**

### CLUES:

- If you need to break something down to its elements then recursion can be a good solution.
- If you need to work with sorted arrays, remember that an array of length 1 is by default sorted.
- Merging/sorting two already sorted arrays is much faster than merging/sorting two unsorted arrays.
  - That's why the point of this algorithm is to work with sorted arrays. You can be sure they all begin as sorted if they all begin at a length of 1.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Worst Case:
  - a sorted or reverse-sorted list (see notes above in "When is it Useful").
  - O(n²)
- Best Case:
  - a randomly sorted list.
  - O(n log n)
    - To create your first left and right lists you go through the entire array once and compare every value to the pivot. That's the first `n`.
    - B/c everything has now been separated into two lists, each item in a list will now never be compared to any item in the other list. This is how we get the "economy of scale". This is where we get the `log n`.

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- The way it was done here, it could use a fair bit of disk space.
- It is possible to implement quick sort as a destructive sort that operates in-place and uses some other tricks like tail call optimization. In this case its spatial complexity it will be O(log n) as will still make some memory allocations on the call stack, but far fewer than merge sort does.

### DESTRUCTIVE:

- Yes/No - depends how it's written.

### STABILITY:

- It can, depends on how it's written, but don't count on it.
