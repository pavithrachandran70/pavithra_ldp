package Assignment8;

// Custom exception types
class FirstCustomException extends Exception {
    public FirstCustomException(String message) {
        super(message);
    }
}

class SecondCustomException extends Exception {
    public SecondCustomException(String message) {
        super(message);
    }
}

class ThirdCustomException extends Exception {
    public ThirdCustomException(String message) {
        super(message);
    }
}

// Class with method that throws all three
class ExceptionThrower {
    public void throwExceptions(int choice) throws FirstCustomException, SecondCustomException, ThirdCustomException {
        switch (choice) {
            case 1:
                throw new FirstCustomException("First custom exception occurred.");
            case 2:
                throw new SecondCustomException("Second custom exception occurred.");
            case 3:
                throw new ThirdCustomException("Third custom exception occurred.");
            case 4:
                // Demonstrate NullPointerException
                String str = null;
                System.out.println(str.length()); // triggers NullPointerException
        }
    }
}

// Main class
public class CustomExceptions {
    public static void main(String[] args) {
        ExceptionThrower thrower = new ExceptionThrower();

        try {
            // You can change the argument to test different exceptions (1 to 4)
            thrower.throwExceptions(4); // Throws NullPointerException
        } catch (Exception e) {
            System.out.println("Caught exception: " + e);
        } finally {
            System.out.println("Finally block executed.");
        }
    }
}

