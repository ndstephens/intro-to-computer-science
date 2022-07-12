# Recursion

A recursive function is a function that calls itself.

## WHEN IS IT USEFUL:

If you find yourself defining your problem into smaller versions of the same problem (all requiring the same solution), it's a pretty good indication that recursion could be useful here.

- However it can quickly get out of control and cause a stack-overflow if you go too many levels deep.

## NOTES:

- **_Almost always_** require a base case, which is when you stop recursing.
  - That usually manifests as the recursive function, based on a conditional, directly returning an actual value (can be undefined) instead of the function itself being called again.
  - Otherwise it can become an infinite spiral.
- The recursive function always needs to return a value.
- Not always the most efficient way to solve a problem, but often elegant. If it will cause severe memory issues then you'll need to instead find an iterative solution (often with a `for-loop`).
  - With an iterative solution you'll often keep track of results by pushing them onto an array since you'll need those prior results/values during the next run of the loop.
  - Then when done you'll often grab the last value (or values) in that array and have your final result.
  - **_The iterative solution will always be faster and more efficient._**

### TRICKS:

- **_Almost always_** your base case will be the first line of your recursive function. You need a good reason for that not to be the case.
- Can be helpful to add the recursive call near the bottom of your parent function before you've even written out how the function will work.
- If the problem was large enough you could `memoize` the child recursive calls so as to not have to run them multiple times and instead immediately return the value.
  - Completely depends on how the recursion works.
  - Sometimes the same recursive call is performed multiple times within the recursive tree. Such as with Fibonacci.
  - If you're running `fibonacci(15)`, within that `fibonacci(3)` (for example) is called several times...as are others.
- The `recursion` part often seems to be about drilling down into "smaller" values (and deeper levels) until you no longer can (when you hit the `base case`).
  - As you return back out (climb back up the levels) you're usually performing a "combining" or "reductive" process on the returned results. Adding, multiplying, merging, sorting, etc.

### CLUES:

- When you have to act on nested arrays.
- When to reach a final result requires the use of the same parent function (used on the initial input) to be applied to all subsequent, or child, values.
  - ex. A factorial is when you take a number `n` and multiply it by each preceding integer (down to 1).
  - ex. A fibonacci number is a number that is defined as the sum of the previous two fibonacci numbers.
- It's similar to Fractals. The same pattern is applied at all scales. You use the same function no matter how many levels deep you break the problem down. You only stop once it can no longer be broken down into more elemental levels...which is what the `base case` represents.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- Depends, but recursions can get out of hand quickly.

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- Recursions can hog up resources (memory) pretty quickly.

### DESTRUCTIVE:

- No

### STABILITY:

- In this section we're not sorting.
