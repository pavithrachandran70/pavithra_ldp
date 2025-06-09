package FunctionalInterface;
import java.util.function.Supplier;

public class SupplierExample {

    public static void main(String[] args) {
        Supplier<Double> randomValue = () -> Math.random();

        System.out.println(randomValue.get()); // Output: some random number
    }


}


//You're using the Supplier interface to provide values on demand, in this case, a random number. Supplier is great for lazy evaluation or generating values when needed.