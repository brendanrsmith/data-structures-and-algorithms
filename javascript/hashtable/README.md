# Hashtables
<!-- Short summary or background information -->
Hash tables allow us to implement efficient lookup / retreival using a key/value pair system and a simple table structure, along with a unique hashing algorithm. By keying our data using the hash function, we can apply a deterministic organizional pattern and bypass needing to iterate through a list in order to retreive values.

## Challenge
<!-- Description of the challenge -->
Implement a Hashtable with the following methods:

`add`: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

`get`: takes in the key and returns the value from the table.

`contains`: takes in the key and returns a boolean, indicating if the key exists in the table already.

`hash`: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
This implementation provides a O(1) time efficiency for lookups, as long as there are not overwhelming amounts of collisions in our hash table.

## API
<!-- Description of each method publicly available in each of your hashtable -->
