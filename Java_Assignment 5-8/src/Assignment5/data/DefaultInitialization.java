package Assignment5.data;


public class DefaultInitialization {
    int number;        // default initialized to 0
    char character;    // default initialized to '\u0000'

    public void printMemberVariables() {
        System.out.println("Default int: " + number);
        System.out.println("Default char: '" + character + "'");
    }

    public void printLocalVariables() {
        /*
        int localNumber;
        char localChar;
        System.out.println("Local int: " + localNumber); // ERROR: variable might not have been initialized
        System.out.println("Local char: " + localChar); // ERROR: variable might not have been initialized
        */

    }
}

