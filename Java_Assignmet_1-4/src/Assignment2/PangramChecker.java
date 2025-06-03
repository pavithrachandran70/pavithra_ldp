package Assignment2;

import java.util.HashSet;
import java.util.Set;

public class PangramChecker {

    public static boolean isPangram(String input) {
        if (input == null) return false;

        Set<Character> lettersSeen = new HashSet<>();

        for (char c : input.toLowerCase().toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                lettersSeen.add(c);
                if (lettersSeen.size() == 26) {
                    return true;
                }
            }
        }

        return lettersSeen.size() == 26;
    }

    public static void main(String[] args) {
        System.out.println(isPangram("The quick brown fox jumps over a lazy dog")); // true
        System.out.println(isPangram("Hello world!"));
    }
}


//Time Complexity: O(n), where n is the length of the input string.
//     Space Complexity: O(1), since the maximum space used is bounded by 26 letters.