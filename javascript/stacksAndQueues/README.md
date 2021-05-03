# Challenge Summary
<!-- Short summary or background information -->
Define two new classes, `Stack` and `Queue`, which adhere to the following principles:

`Stack`: First in, last out / Last in, first out. Should contain methods for `push(value)`, `pop()`, `peek()`, and `isEmpty()`. All methods should run with a O(1) time efficiency.

`Queue`: First in, first out / Last in, last out. Should contain methods for `enqueue(value)`, `dequeue()`, `peek()`, and `isEmpty()`. All methods should run with O(1) time efficiency. 

## Challenge Description
<!-- Description of the challenge -->

Create a `Stack` class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to `top` when the stack is created.
Define a method called `push` which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
Should raise exception when called on empty stack
Define a method called `peek` that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
Should raise exception when called on empty stack
Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the stack is empty.
Create a `Queue` class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
Should raise exception when called on empty queue
Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
Should raise exception when called on empty queue
Define a method called `isEmpty` that takes no argument, and returns a boolean indicating whether or not the queue is empty.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
time: O(1)

space: O(1)

## Solution
<!-- Embedded whiteboard image -->
![whiteboard]()
