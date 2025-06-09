package HashSet;

import java.util.HashSet;
import java.util.List;

public class Example {
    public static void main(String[] args) {
        HashSet<String> emails = new HashSet<>();
        emails.add("alice@example.com");
        emails.add("bob@example.com");
        emails.add("alice@example.com"); // duplicate, won't be added

        System.out.println(emails); // Output: [alice@example.com, bob@example.com]
    }
}
