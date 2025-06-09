package Statements;

public class BreakContinueDemo {
    public static void main(String[] args) {

        System.out.println("=== Demonstrating continue ===");
        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                System.out.println("Skipping number: " + i);
                continue; // skip the rest of the loop when i == 3
            }
            System.out.println("Number: " + i);
        }

        System.out.println("\n=== Demonstrating break ===");
        for (int i = 1; i <= 5; i++) {
            if (i == 4) {
                System.out.println("Breaking at number: " + i);
                break; // exit the loop when i == 4
            }
            System.out.println("Number: " + i);
        }
    }
}
