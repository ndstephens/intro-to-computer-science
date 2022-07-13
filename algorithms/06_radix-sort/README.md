# Radix Sort

Non-comparison based sorting.

- We sort parts of the array.
  - For example, start with the following array: [109, 224, 901, 58]
  - We sort the ones place first, so all the numbers in the ones place are in order from 0 to 9. After the first pass we would have [901, 224, 58, 109].
  - Then we would sort on the tens place, ending up with [901, 109, 224, 58].
  - Then we'd sort by the hundreds, getting [58, 109, 224, 901].

## WHEN IS IT USEFUL:

- The `big O` of comparison based algorithms cannot be any faster than `n log n` so in order to get beyond that, we have to change what we're doing. We have to sort based on other criteria.

## NOTES:

- So what's the mechanism of doing this? Buckets
- To do a positive integer radix sort (it's possible to do others but let's stick to the easy one for now) we will create ten buckets, one for each integer zero to nine.
- Then we'll loop `d` times where `d` is the maximum length of a number in our array.
  - So if the longest number in our array is 90932 then `d` would be 5.
- Then in the inner loop we would enqueue all the numbers in the buckets based on what digit we were sorting and then dequeue them back into the main array.
  - JS doesn't have queue semantics so we'll use push for enqueue and shift for dequeue.
- We repeat this process until we get through `d` and the array is sorted!

### TRICKS:

- Using buckets...well, it's the only way to do it.
- Can also work with strings.
- Can work with binary and hexadecimal numbers.

### CLUES:

- ???

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- So far we've just had `n` as a variable which represents how many items there are to sort.
- In radix sort we have multiple variables. `n` is still important but now we have another variable in play here.
- `k` is going to represents the "maximum key length", or `d` as we referred to it as above.
- The more buckets we need, the larger the complexity.
- So instead of being `O(n²)` or `O(n _ n)`, it ends up being `O(n _ k)`.
- So is it better or worse than `O(n log n)` sorts?
  - It depends! If you have a lot of numbers with lots of varied lengths that will bucket into a good distribution it can be very effective.
  - If you numbers [1, 10, 100, 1000, 10000, 100000] etc it ends up being the worst sort. It ends up being `O(n²)` at that point.

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- What about the spatial complexity?
- It ends up being O(n + k) and this why radix sort is really only used in very specific circumstances: it's not great in terms of how much space it takes.

### DESTRUCTIVE:

- Yes/No - depends how it's written.

### STABILITY:

- Probably not
