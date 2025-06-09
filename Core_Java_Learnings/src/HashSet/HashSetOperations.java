package HashSet;

import java.util.HashSet;
import java.util.Arrays;

public class HashSetOperations {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();

        // Add
        //Adds the specified element to the set if it is not already present.
        set.add("Apple");
        set.add("Banana");
        set.add("Apple"); // Duplicate, won't be added

        // Contains
        //Checks whether the set contains the given element.
        System.out.println(set.contains("Banana")); // true

        // Size
        //Returns the total number of elements in the set.
        System.out.println(set.size()); // 2

        // Remove
        // Removes the specified element if it exists in the set.
        set.remove("Banana");

        // isEmpty
        //Checks if the set is empty (contains no elements).
        System.out.println(set.isEmpty()); // false

        // Add all from another collection
        HashSet<String> set2 = new HashSet<>(Arrays.asList("Orange", "Grapes"));
        set.addAll(set2); // Adds "Orange" and "Grapes"

        // Remove all (difference)
        set.removeAll(Arrays.asList("Orange")); // Removes "Orange"

        // Retain all (intersection)
        set.retainAll(Arrays.asList("Grapes", "Apple")); // Keeps only those

        // Convert to array
        Object[] array = set.toArray();

        // Clear
       // Removes all elements from the set.
        set.clear();
    }
}
