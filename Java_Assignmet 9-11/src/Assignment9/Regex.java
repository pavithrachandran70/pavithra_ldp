package Assignment9;

//This includes Pattern and Matcher classes, which are used for working with regular expressions in Java.
import java.util.regex.*;

public class Regex{
    public static void main(String[] args) {

        String[] sentences = {
                "This is a valid sentence.",
                "this starts with a lowercase.",
                "This ends without period",
                "Another valid one.",
                "NoPeriodAtEnd",
                "capital and period."
        };


        String regex = "^[A-Z].*\\.$";
        Pattern pattern = Pattern.compile(regex);

        for (String sentence : sentences) {
            Matcher matcher = pattern.matcher(sentence);
            boolean isValid = matcher.matches();
            System.out.println("\"" + sentence + "\" -> " + (isValid ? "Valid" : "Invalid"));
        }
    }
}
