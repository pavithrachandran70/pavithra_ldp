
import java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        // 1. Create an ArrayList of String type
        ArrayList<String> students = new ArrayList<>();

        // 2. Add elements to the ArrayList
        students.add("Alice");
        students.add("Bob");
        students.add("Charlie");

        // 3. Access elements by index
        System.out.println("First student: " + students.get(0)); // Alice

        // 4. Remove an element
        students.remove("Bob"); // Removes "Bob" from the list

        // 5. Iterate using a for-each loop
        System.out.println("Remaining students:");
        for (String student : students) {
            System.out.println(student);
        }

        // 6. Check the size of the ArrayList
        System.out.println("Total students: " + students.size());
    }
}
