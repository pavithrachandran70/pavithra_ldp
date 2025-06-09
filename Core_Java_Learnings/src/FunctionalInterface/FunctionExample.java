package FunctionalInterface;
import java.util.function.Function;
public class FunctionExample {

    public static void main(String[] args) {
        Function<String, Integer> stringLength = str -> str.length();

        System.out.println(stringLength.apply("Java")); // Output: 4
    }
}


//You're using the Function<T, R> interface to define a function that takes a string and returns its length.
// The apply() method triggers this function.