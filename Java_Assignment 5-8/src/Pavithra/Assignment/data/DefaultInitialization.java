package Pavithra.Assignment.data;

public class DefaultInitialization {


    // Instance variables (default-initialized)
    int number;
    char character;

    // Method to print member variables (will print default values)
    public void printMemberVariables() {
        System.out.println("Default int value: " + number);
        System.out.println("Default char value: '" + character + "'");
    }

    // Method demonstrating local variables (uninitialized - will cause error if used)
    public void printLocalVariables() {
        int localInt;
        char localChar;

        // Uncommenting below lines will cause compile-time error due to uninitialized use
        // System.out.println("Local int: " + localInt);
        // System.out.println("Local char: " + localChar);

        System.out.println("Local variables are not initialized. Cannot print them without assigning values.");
    }

}
