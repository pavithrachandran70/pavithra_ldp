package Regex;

import java.util.regex.*;

public class Demo {
    public static void main(String[] args) {
        String input = "abc123";
        String pattern = "[a-z]+\\d+";

        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(input);

        if (m.matches()) {
            System.out.println("Pattern matched!");
        } else {
            System.out.println("Pattern did not match.");
        }
    }
}
