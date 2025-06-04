package Assignment7;

class Cycle {
    void ride() {
        System.out.println("Riding a cycle.");
    }
}

class Unicycle extends Cycle {
    void balance() {
        System.out.println("Balancing a Unicycle.");
    }
}

class Bicycle extends Cycle {
    void balance() {
        System.out.println("Balancing a Bicycle.");
    }
}

class Tricycle extends Cycle {
    // No balance method
}

public class CycleTest {
    public static void main(String[] args) {
        Cycle[] cycles = { new Unicycle(), new Bicycle(), new Tricycle() };

        // Upcast: cannot call balance() here
        // cycles[0].balance();

        // Downcast to call balance()
        ((Unicycle) cycles[0]).balance();
        ((Bicycle) cycles[1]).balance();

        // ((Tricycle) cycles[2]).balance(); // Error: no balance() in Tricycle
    }
}
