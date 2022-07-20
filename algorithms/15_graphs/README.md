# Graphs

Graphs are all about modeling relations between many items. For example, think of Facebook's Social Graph. I'm friends with you and you're friends with me. Many of my friends are your friends, so the connections aren't linear.

In the Facebook example, each person would be a node. A node represents some entity, much like a row in an SQL database. Every so-called "friendship" would be called an edge. An edge represents some connection between two items. In this case, our Facebook friendship is bidirectional: if I'm friends with you then you're friends with me. Twitter would be an example of a unidirectional edge: just because I follow you doesn't mean you follow me.

Graphs are similar to trees, but they have no `root`. There's also no hierarchy. There's no real parent or child, just connections.

Since there's no clear parent-child relationship you need to be aware there will be cycles (e.g. A points to B, B points to C, C points to A, circles in graphs) and other more difficult patterns to deal with.

Traversal is similar to `breadth-first traversal`. However, instead of letting breadth-first traversal run to completion, we'll just limit how many times that outer loop runs, effectively limiting how many levels down it goes, or how many degrees of separation!

## WHEN IS IT USEFUL:

- Social networks
- Internet of Things devices
- Neural networks and machine-learning libraries

## NOTES:

- We'll use a queue to traverse, just like with breadth-first traversal.
- However we'll need to keep track of nodes we've already visited or we could easily visit them again since graphs can be cyclical instead of having strick parent-child relationships only.
- Also need to first empty the current queue before adding new items into it.
  - This allows us to limit how many jumps, or degrees-of-separation, we make from the starting position.

### TRICKS:

- Use an outer `for-loop` to control looping by degrees-of-separation.
- Use an inner `while-loop` to loop until the current queue is emptied.
- Use a `Set` to help keep track of previously visited nodes (prevent duplicates).

### CLUES:

- Multiple intersecting bi-directional connections.

---

## BIG-O:

### COMPUTATIONAL COMPLEXITY - TIME:

- ??

### SPATIAL COMPLEXITY - RAM/DISK SPACE:

- ??
