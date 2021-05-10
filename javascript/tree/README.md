# Trees
<!-- Short summary or background information -->
Binary tree and Binary search tree

## Challenge
<!-- Description of the challenge -->
Create a `Node` class that has properties for the value stored in the node, the left child node, and the right child node.
Create a `BinaryTree` class
Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.
Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Create a `BinarySearchTree` class
Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->

Using nodes with .value, .left, and .right properties I was able to implement the correct functionality easily. O(n) for time complexity, as the entire tree may need to be traversed in order to access contents.

The Binary Search tree has an o(log(n)) time complexity.

## API
<!-- Description of each method publicly available in each of your trees -->
### Binary Tree

`preOrder()` - returns pre ordered tree contents as array

`inOrder()` - returns in ordered tree contents as array

`postOrder()` - returns post ordered tree contents as array

### Binary Search Tree

`add(value)` - adds given value as node correctly ordered in BST

`contains(value)` - returns boolean if given value is present at least once in BST
