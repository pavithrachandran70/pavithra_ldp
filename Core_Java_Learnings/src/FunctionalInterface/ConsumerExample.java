package FunctionalInterface;
import java.util.function.Consumer;

public class ConsumerExample {
    public static void main(String[] args) {
        Consumer<String> greet = name -> System.out.println("Hello, " + name);
        greet.accept("Alice"); // Output: Hello, Alice
    }
}


//You're using the Consumer functional interface to define a simple action (printing a greeting)
// that takes an input string but does not return anything. The accept() method is used to trigger the action.