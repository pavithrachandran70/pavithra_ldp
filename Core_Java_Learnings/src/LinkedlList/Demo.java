package LinkedlList;
import java.util.LinkedList;

public class Demo {
    public static void main(String[] args) {
        // 1. Create a LinkedList of String type
        LinkedList<String> students = new LinkedList<>();

        // 2. Add elements to the LinkedList
        students.add("Alice");
        students.add("Bob");
        students.add("Charlie");

        // 3. Access the first element
        System.out.println("First student: " + students.getFirst()); // Alice

        // 4. Remove an element
        students.remove("Bob"); // Removes "Bob" from the list

        // 5. Iterate using a for-each loop
        System.out.println("Remaining students:");
        for (String student : students) {
            System.out.println(student);
        }

        // 6. Add a student at the beginning and end
        students.addFirst("Zara");
        students.addLast("David");

        // 7. Print updated list
        System.out.println("Updated students list:");
        for (String student : students) {
            System.out.println(student);
        }

        // 8. Size of the LinkedList
        System.out.println("Total students: " + students.size());
    }
}
