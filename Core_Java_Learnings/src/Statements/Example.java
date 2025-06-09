package Statements;
//if,if-else,else-if
public class Example {
    public static void main(String[] args) {
        int number = 15;

        // 1. if statement
        if (number > 0) {
            System.out.println("The number is positive.");
        }

        // 2. if-else statement
        if (number % 2 == 0) {
            System.out.println("The number is even.");
        } else {
            System.out.println("The number is odd.");
        }

        // 3. else-if ladder
        if (number < 0) {
            System.out.println("The number is negative.");
        } else if (number == 0) {
            System.out.println("The number is zero.");
        } else if (number > 0 && number <= 10) {
            System.out.println("The number is between 1 and 10.");
        } else {
            System.out.println("The number is greater than 10.");
        }
    }
}
