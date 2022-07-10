# Bubble Sort

Bubble Sort works by comparing two adjacent numbers next to each other and then
swapping their places if the smaller index's value is larger than the larger
index's. Continue looping through until all values are in ascending order.

## NOTES:

- It's called "Bubble Sort" b/c the biggest elements bubble to the last spots.
- On each sweep of the array, the largest unsorted number will be put in its proper location.
- What that means is by the end of the first sweep you can be sure the largest number is now at the very end of the array (its correct spot). On the second sweep the second-largest number is guaranteed to be at the second-to-last position of the array, and so on. The array gets sorted starting at the end basically.

### TRICKS:

- That means on each sweep of the array you can check one less element...meaning you can shorten the amount (or length) of elements checked...skipping the last elements b/c they're already sorted.
- For even more optimization you could keep track of the index where the last element swap occurred on the current sweep. You know then that all elements past that index are already sorted. On the next sweep you can stop at that index, shortening the length of the array that you're checking as efficiently as possible (versus just shortening by 1 on every sweep).
- Once we run through the whole array with no swaps, the array is sorted. Therefore, you should keep track (as done above) if any swapping of elements occurred on that current sweep. If not, then the array is sorted and you can stop (possibly earlier than expected).

### CLUES:

- If the algorithm includes (or could include) in its description a phrase similar to "continue until" then that might be a clue to use a `while` loop, which also then means you need to keep track of a certain value. That value would tell the `while` loop it can stop running.
- Repeating a process _until_ a certain condition is met could also indicate the use of **_recursion_**.
- If you're going to have to **_swap_** values in an array then you'll probably need either a temporary placeholder (as done in the provided solution), or use an array destructing technique (as I did in my solution).

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

#### \- BEST CASE:

- It's already sorted and you sweep it once.
- **O(n) - LINEAR**

#### \- WORST CASE:

- It's a backward sorted array. You'd have to sweep it by length - 1, and every sweep goes through the array by one less amount each time. This will grow exponentially as the list gets bigger.
- **O(n<sup>2</sup>) - QUADRATIC (EXPONENTIAL)**

#### \- AVERAGE CASE:

- Some numbers are in order, some are not. The amount of comparisons and swaps would grow exponentially.
- **O(n<sup>2</sup>) - QUADRATIC (EXPONENTIAL)**

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- We're operating on the array itself and not creating anything else in memory.
- Because we are operating on the array itself, we'd say this sort is destructive.
- **O(1) - CONSTANT**

### DESTRUCTIVE:

- Does it mutate the original input (the array)?
- **YES** - we're operating on the array itself.

### STABILITY:

- To be considered a **_stable sort_**, the sort must guarantee that if two things are **_equal_** that that they stay in their original order.
- **YES** - it'll guarantee that equivalent items come back in the order they started in.
