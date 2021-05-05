# Data Structures and Algorithms

See [setup instructions](https://codefellows.github.io/setup-guide/code-301/3-code-challenges), in the Code 301 Setup Guide.

## Repository Quick Tour and Usage

### 301 Code Challenges

Under the `data-structures-and-algorithms` repository, at the top level is a folder called `code-challenges`

Each day, you'll add one new file to this folder to do your work for the day's assigned code challenge

### 401 Data Structures, Code Challenges

[Array Binary Search](./javascript/code-challenges/arrayBinarySearch)

[Array Shift](./javascript/code-challenges/arrayShift)

[FIFO Animal Shelter](./javascript/code-challenges/fifoAnimalShelter)

[LinkedList Zip](./javascript/code-challenges/ll-zip)

[Queue with Stacks](./javascript/code-challenges/queueWithStacks)

[Reverse LinkedList](./javascript/code-challenges/reverse-ll)

[Multi Bracket Validation](./javascript/code-challenges/multiBracketValidation)

## linked lists:

`insert(value)` - Adds a new node value to the list at the head.

`includes(value)` - Takes a value, and returns true/false if the value is present in the list.

`toString()` - Returns a string representing all the values in the linked list in text format.

`append(value)` - Adds a new node value to the list at the tail.

`insertBefore(value, newVal)` -  which add a new node with the given `newValue` immediately before the first `value` node.

`insertAfter(value, newVal)` - which add a new node with the given `newValue` immediately after the first `value` node.

`kthFromEnd(k)` - which returns a node's value that is `k` from the end of the linked list.

`zipLists(list1, list2)` - zips together two linked lists into a new list with alternating nodes from list1 and list2

## Stacks:

`push(value)` - adds a new value to the stack.

`pop()` - removes and returns the top value on the stack.

`peek()` - returns the top value on the stack. Does not remove it.

`isEmpty()` - checks if stack contains any values, returns a boolean.

## Queues:

`enqueue(value)` - adds a new value to the rear of the queue.

`dequeue()` - removes and returns the value at the front of the queue.

`peek()` - returns the value at the front of the queue. Does not remove it from the queue.

`isEmpty()` - checks if queue contains any values, returns a boolean.
