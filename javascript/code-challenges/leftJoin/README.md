# Left Join
<!-- Description of the challenge -->
Write a function that LEFT JOINs two hashmaps into a single data structure.

The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

Avoid utilizing any of the library methods available to your language.

Modify your function to return a count of each of the words in the provided string

Modify your function to return a list of the words most frequently used in the provided string

## Whiteboard Process
<!-- Embedded whiteboard image -->
![whiteboard](../../assets/left-join.png)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
I used a simple for loop to loop over all items in the left hash table, inside of which I query the right hash table to see if a corresponding key exists there. If not, the right value is set to null. Then both left and right values are added to a new hash table of equal size to the given left map. Since these operations all rely on looping over the initial hash table, we are left with an O(n) time and space efficiency (all lookups take place in O(1) time/space).

## Solution
<!-- Show how to run your code, and examples of it in action -->
