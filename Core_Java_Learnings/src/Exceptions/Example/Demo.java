package Exceptions.Example;

public class Demo {
    public static void main(String[] args) {
        // 1. NullPointerException Example
        try {
            String str = null;
            System.out.println("String length: " + str.length());
        } catch (NullPointerException e) {
            System.out.println("Caught NullPointerException: " + e.getMessage());
        }

        // 2. ArithmeticException Example
        try {
            int a = 10;
            int b = 0;
            int result = a / b;
            System.out.println("Division result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught ArithmeticException: " + e.getMessage());
        }

        // 3. ArrayIndexOutOfBoundsException Example
        try {
            int[] numbers = {1, 2, 3};
            System.out.println("Number at index 5: " + numbers[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught ArrayIndexOutOfBoundsException: " + e.getMessage());
        }
    }
}
